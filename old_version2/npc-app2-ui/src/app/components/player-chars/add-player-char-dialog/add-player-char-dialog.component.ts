import { Component, OnInit } from '@angular/core';
import { PlayerCharacter } from 'src/app/entities/PlayerCharacter';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-player-char-dialog',
  templateUrl: './add-player-char-dialog.component.html',
  styleUrls: ['./add-player-char-dialog.component.css']
})
export class AddPlayerCharDialogComponent {

  newPC = new PlayerCharacter();

  constructor(public dialogRef: MatDialogRef<AddPlayerCharDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
