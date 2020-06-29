import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Location } from 'src/app/entities/Location';
import { LocationService } from 'src/app/services/location.service';
import { AddLocationDialogComponent } from './add-location-dialog/add-location-dialog.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource<Location>();

  displayedColumns: string[] = [
    'name', 'summary', 'remove'
  ];

  constructor(private router: Router, private LocationService: LocationService, private snackbar: MatSnackBar, private addDialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.LocationService.getAllLocations().subscribe(
      succ => {
        this.dataSource.data = succ;
        this.LocationService.saveData(this.dataSource.data);
      },
      err => {
        this.snackbar.open('Failed to retrieve Locations.', 'OK', { duration: 5000 });
      }
    );
  }

  openAddDialog(): void {
    const dialogRef = this.addDialog.open(AddLocationDialogComponent, {
      width: '60%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.LocationService.addLocation(dialogReturn).subscribe(
          succ => {
            this.snackbar.open('Successfully added new Location.', 'OK', { duration: 5000 });
            console.log('Received from server: ', succ);
            this.dataSource.data.push(succ);
            this.dataSource.data = this.dataSource.data;
            this.LocationService.saveData(this.dataSource.data);
          },
          err => {
            this.snackbar.open('Failed to add new Location.', 'OK', { duration: 5000 });
          }
        );
      }
    });
  }

  removeRow(index: number) {
    if (index > -1) {
      console.log(index);
      let loc = this.dataSource.data.slice(index, index + 1)[0];
      console.log(loc);
      let locId = loc.locationId;
      this.LocationService.removeLocation(locId).subscribe(
        succ => {
          this.snackbar.open('Successfully removed Location.', 'OK', { duration: 5000 });
          this.dataSource.data.splice(index, 1);
          this.dataSource.data = this.dataSource.data;
          this.LocationService.saveData(this.dataSource.data);
        },
        err => {
          this.snackbar.open('Failed to remove Location.', 'OK', { duration: 5000 });
        }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
