import { Component, OnInit, Inject } from '@angular/core';
import { Item } from 'src/app/entities/Item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-item-dialog',
  templateUrl: './update-item-dialog.component.html',
  styleUrls: ['../../../app.component.css']
})
export class UpdateItemDialogComponent {

  constructor(public dialogRef: MatDialogRef<UpdateItemDialogComponent>, @Inject(MAT_DIALOG_DATA) public record: Item) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
