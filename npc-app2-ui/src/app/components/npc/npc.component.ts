import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Npc } from 'src/app/entities/Npc';
import { NpcService } from 'src/app/services/npc.service';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<Npc>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource<Npc>();

  // Determines which columns are displayed on the table
  displayedColumns: string[] = [
    'name', 'campaign', 'race', 'occupation',
    'country', 'town', 'physicalDesc', 'voiceDesc',
    'personalityDesc', 'organization', 'comments',
    'update', 'remove'
  ];

  constructor(private NpcService: NpcService, private snackbar: MatSnackBar, private addDialog: MatDialog, private updateDialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.NpcService.getAllNpcs().subscribe(
      succ => {
        this.dataSource.data = succ;
      },
      err => {
        this.snackbar.open('Failed to retrieve NPCs.', 'OK', { duration: 5000 });
      }
    );
  }

  openAddDialog(): void {
    const dialogRef = this.addDialog.open(AddDialogComponent, {
      width: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.NpcService.addNpc(dialogReturn).subscribe(
          succ => {
            this.snackbar.open('Successfully added new NPC.', 'OK', { duration: 2000 });
            console.log('Received from server: ', succ);
            this.dataSource.data.push(succ);
            // This is stupid. But it triggers the tables update. Using renderRows() wasn't working with the paginator.
            this.dataSource.data = this.dataSource.data;
          },
          err => {
            this.snackbar.open('Failed to add new NPC.', 'OK', { duration: 5000 });
          }
        );
      }
    });
  }

  openUpdateDialog(index: number): void {
    let record = this.dataSource.data.slice(index, index+1)[0];

    const dialogRef = this.updateDialog.open(UpdateDialogComponent, {
      data: record,
      width: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.NpcService.updateNpc(dialogReturn).subscribe(
          succ => {
            // Remove the old record
            this.dataSource.data.splice(index, 1);

            // Add the new
            console.log('Received from server: ', succ);
            this.dataSource.data.push(dialogReturn);
            this.table.renderRows();
          },
          err => {
            this.snackbar.open('Failed to update NPC.', 'OK', { duration: 5000 });
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
