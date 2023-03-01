import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from 'src/app/entities/Location';
import { LocationService } from 'src/app/services/location.service';
import { AddLocationDialogComponent } from '../../add-location-dialog/add-location-dialog.component';

@Component({
  selector: 'app-add-location-subloc',
  templateUrl: './add-location-subloc.component.html',
  styleUrls: ['./add-location-subloc.component.css']
})
export class AddLocationSublocComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource<Location>();
  returnLoc = null;
  displayedColumns: string[] = [
    'name', 'summary', 'select'
  ];
  
  constructor(public dialogRef: MatDialogRef<AddLocationDialogComponent>, public locationService: LocationService, private snackbar: MatSnackBar) { }

  ngOnInit() {
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
