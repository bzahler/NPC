import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/entities/Location';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-location-dialog',
  templateUrl: './add-location-dialog.component.html',
  styleUrls: ['./add-location-dialog.component.css']
})
export class AddLocationDialogComponent implements OnInit {

  newLoc = new Location();

  constructor(public dialogRef: MatDialogRef<AddLocationDialogComponent>) { }

  ngOnInit() {
    this.newLoc.listNpc = [];
    this.newLoc.listSubLocation = [];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
