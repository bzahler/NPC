import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddCampaignDialogComponent } from '../../add-campaign-dialog/add-campaign-dialog.component';
import { Location } from 'src/app/entities/Location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-add-location-campaign',
  templateUrl: './add-location-campaign.component.html',
  styleUrls: ['./add-location-campaign.component.css']
})
export class AddLocationCampaignComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource<Location>();
  returnLoc = null;
  displayedColumns: string[] = [
    'name', 'summary', 'select'
  ];

  constructor(public dialogRef: MatDialogRef<AddCampaignDialogComponent>, public locationService: LocationService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource.data = this.locationService.getAllData();
    if(!this.dataSource.data) {
      this.locationService.getAllLocations().subscribe(
        succ => {
          this.dataSource.data = succ;
          this.locationService.saveData(succ);
        },
        err => {
          this.snackbar.open('Could not retrieve locations from db.', 'OK', { duration: 5000 });
        }
      )
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectRow(index: number) {
    if (index > -1) {
      console.log(index);
      this.returnLoc = this.dataSource.data.slice(index, index + 1)[0];
      this.snackbar.open('Selected ' + this.returnLoc.name, 'OK', { duration: 2000 });
    }
  }

}
