import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Npc } from 'src/app/entities/Npc';
import { NpcService } from 'src/app/services/npc.service';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<Npc>;
  dataSource = new MatTableDataSource<Npc>();

  // Determines which columns are displayed on the table
  displayedColumns: string[] = [
    'name', 'campaign', 'race', 'occupation',
    'country', 'town', 'physicalDesc', 'voiceDesc',
    'personalityDesc', 'organization', 'comments',
    'remove'
  ];

  constructor(private NpcService: NpcService, private snackbar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
    this.NpcService.getAllNpcs().subscribe(
      succ => {
        this.dataSource.data = succ;
      },
      err => {
        this.snackbar.open('Failed to retrieve NPCs.', 'OK', { duration: 5000 });
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.NpcService.addNpc(dialogReturn).subscribe(
          succ => {
            console.log('Received from server: ', succ);
            this.dataSource.data.push(succ);
            this.NpcService.data = this.dataSource.data;
            this.table.renderRows();
          },
          err => {
            this.snackbar.open('Failed to add new NPC.', 'OK', { duration: 5000 });
          }
        );
      }
    });
  }

  removeRow(index: number) {
    if (index > -1) {
      console.log(index);
      let npc = this.dataSource.data.slice(index, index+1)[0];
      console.log(npc);
      let npcId = npc.npcId;
      this.NpcService.removeNpc(npcId).subscribe(
        succ => {
          this.snackbar.open('Successfully removed NPC.', 'OK', { duration: 5000 });
          this.dataSource.data.splice(index, 1);
          this.table.renderRows();
        },
        err => {
          this.snackbar.open('Failed to remove NPC.', 'OK', { duration: 5000 });
        }
      );
    }
  }
}
