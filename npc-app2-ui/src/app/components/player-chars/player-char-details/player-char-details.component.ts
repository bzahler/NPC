import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlayerCharacter } from 'src/app/entities/PlayerCharacter';
import { PlayerCharacterService } from 'src/app/services/player-character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-char-details',
  templateUrl: './player-char-details.component.html',
  styleUrls: ['./player-char-details.component.css']
})
export class PlayerCharDetailsComponent implements OnInit {

  id: string;
  data: PlayerCharacter;
  editable: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private snackbar: MatSnackBar, private pcService: PlayerCharacterService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    // check if the service has the data or not
    let checkService = this.pcService.getAllData();
    // if it doesn't, update the service before getting the data
    if (!checkService) {
      this.pcService.getAllPlayerChars().subscribe(
        succ => {
          this.pcService.saveData(succ);
          this.data = this.pcService.getById(this.id);
        },
        err => {
          this.snackbar.open('Could not retrieve Player Characters from db.', 'OK', { duration: 5000 });
        }
      );
      // else just get the data
    } else {
      this.data = this.pcService.getById(this.id);
    }
  }

  toggleEditable() {
    this.editable = !this.editable;
  }
  
  saveNpc() {

    this.pcService.updatePlayerChar(this.data).subscribe(
      succ => {
        this.snackbar.open('Updated ' + this.data.charName, 'OK', { duration: 5000 });
      },
      err => {
        this.snackbar.open('Failed to update ' + this.data.charName, 'OK', { duration: 5000 });
        // Ideally this would undo your edits
      }
    );
    this.editable = false;
  }
}
