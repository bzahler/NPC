import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerCharacter } from 'src/app/entities/PlayerCharacter';
import { PlayerCharacterService } from 'src/app/services/player-character.service';
import { AddCampaignDialogComponent } from '../../add-campaign-dialog/add-campaign-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-player-char-campaign',
  templateUrl: './add-player-char-campaign.component.html',
  styleUrls: ['./add-player-char-campaign.component.css']
})
export class AddPlayerCharCampaignComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource<PlayerCharacter>();
  returnPC = null;
  displayedColumns: string[] = [
    'charName', 'playerName', 'charRace', 'charClass', 'phbBackground', 'select'
  ];

  constructor(public dialogRef: MatDialogRef<AddCampaignDialogComponent>, public pcServ: PlayerCharacterService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource.data = this.pcServ.getAllData();
    if (!this.dataSource.data) {
      this.pcServ.getAllPlayerChars().subscribe(
        succ => {
          this.dataSource.data = succ;
          this.pcServ.saveData(succ);
        },
        err => {
          this.snackbar.open('Could not retrieve pcs from db.', 'OK', { duration: 5000 });
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
      this.returnPC = this.dataSource.data.slice(index, index + 1)[0];
      this.snackbar.open('Selected ' + this.returnPC.charName, 'OK', { duration: 2000 });
    }
  }
}
