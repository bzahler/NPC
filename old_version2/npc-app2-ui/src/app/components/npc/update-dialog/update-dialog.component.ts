import { Component, OnInit, Inject } from '@angular/core';
import { Npc } from 'src/app/entities/Npc';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['../../../app.component.css']
})
export class UpdateDialogComponent {

  constructor(public dialogRef: MatDialogRef<UpdateDialogComponent>, @Inject(MAT_DIALOG_DATA) public record: Npc) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
