import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PlayerCharacter } from 'src/app/entities/PlayerCharacter';
import { PlayerCharacterService } from 'src/app/services/player-character.service';
import { AddPlayerCharDialogComponent } from './add-player-char-dialog/add-player-char-dialog.component';

@Component({
  selector: 'app-player-chars',
  templateUrl: './player-chars.component.html',
  styleUrls: ['./player-chars.component.css']
})
export class PlayerCharsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource<PlayerCharacter>();

  displayedColumns: string[] = [
    'charName', 'playerName', 'charRace', 'charClass', 'phbBackground', 'details', 'remove'
  ];
  
  constructor(private router: Router, private PCService: PlayerCharacterService, private snackbar: MatSnackBar, private addDialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.PCService.getAllPlayerChars().subscribe(
      succ => {
        this.dataSource.data = succ;
        this.PCService.saveData(this.dataSource.data);
      },
      err => {
        this.snackbar.open('Failed to retrieve Player Characters.', 'OK', { duration: 5000 });
      }
    );
  }

  openAddDialog(): void {
    const dialogRef = this.addDialog.open(AddPlayerCharDialogComponent, {
      width: '60%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.PCService.addPlayerChar(dialogReturn).subscribe(
          succ => {
            this.snackbar.open('Successfully added new Player Character.', 'OK', { duration: 5000 });
            console.log('Received from server: ', succ);
            this.dataSource.data.push(succ);
            this.dataSource.data = this.dataSource.data;
            this.PCService.saveData(this.dataSource.data);
          },
          err => {
            this.snackbar.open('Failed to add new Player Character.', 'OK', { duration: 5000 });
          }
        );
      }
    });
  }

  removeRow(index: number) {
    if (index > -1) {
      console.log(index);
      let pc = this.dataSource.data.slice(index, index + 1)[0];
      console.log(pc);
      let pcId = pc.playerId;
      this.PCService.removePlayerChar(pcId).subscribe(
        succ => {
          this.snackbar.open('Successfully removed Player Character.', 'OK', { duration: 5000 });
          this.dataSource.data.splice(index, 1);
          this.dataSource.data = this.dataSource.data;
          this.PCService.saveData(this.dataSource.data);
        },
        err => {
          this.snackbar.open('Failed to remove Player Character.', 'OK', { duration: 5000 });
        }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detailsRouter(path, data) {
    this.router.navigate([path, data]);
  }
}
