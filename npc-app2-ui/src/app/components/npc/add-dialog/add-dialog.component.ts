import { Component } from '@angular/core';
import { Npc } from 'src/app/entities/Npc';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {

  newNpc = new Npc();

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
