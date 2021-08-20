import { Location } from 'src/app/entities/Location';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-burg-upload',
  templateUrl: './burg-upload.component.html',
  styleUrls: ['./burg-upload.component.css']
})
export class BurgUploadComponent implements OnInit {

  uploadedBurgs: Burg[] = [];
  burgs: Location[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  selectBurgs(event: any): void {
    const headers = ['Id', 'Burg', 'Province', 'State', 'Culture', 'Religion', 'Population', 'Longitude', 'Latitude', 'Elevation (ft)', 'Capital', 'Port', 'Citadel', 'Walls', 'Plaza', 'Temple', 'Shanty Town'];

    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files.');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      const binaryStr: string = e.target.result;
      const workBook: XLSX.WorkBook = XLSX.read(binaryStr, { type: 'binary' });
      const workSheetName: string = workBook.SheetNames[0];
      const workSheet: XLSX.WorkSheet = workBook.Sheets[workSheetName];
      const data = XLSX.utils.sheet_to_json(workSheet, { header: headers });
      this.uploadedBurgs = data as Burg[];
      if (this.uploadedBurgs[0].Id = 'Id') {
        this.uploadedBurgs.splice(0, 1);
      }
    }
  }

  uploadBurgs(): void {
    this.uploadedBurgs.forEach( burg => {
      let loc = new Location;
      loc.name = burg.Burg;
      loc.summary = burg.Capital + " " + burg.Citadel + " " + burg.Plaza + " " + burg.Port + " " + burg['Shanty Town'] + " " + burg.Walls + " " + burg.Temple;
      let stringy = JSON.stringify(burg);
      console.log(stringy);
      stringy = stringy.split(",").join("\n");
      console.log(stringy);
      loc.dmDesc = stringy;
      this.burgs.push(loc);
    });

    
  }
}

class Burg {
  Id: string | undefined;
  Burg: string | undefined;
  Province: string | undefined;
  State: string | undefined;
  Culture: string | undefined;
  Religion: string | undefined;
  Population: string | undefined;
  Longitude: string | undefined;
  Latitude: string | undefined;
  'Elevation(ft)': string | undefined;
  Capital: string | undefined;
  Port: string | undefined;
  Citadel: string | undefined;
  Walls: string | undefined;
  Plaza: string | undefined;
  Temple: string | undefined;
  'Shanty Town': string | undefined;
}
