import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/Item';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['../../../app.component.css']
})
export class AddItemDialogComponent {

  newItem = new Item();

  constructor(public dialogRef: MatDialogRef<AddItemDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
