import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Npc } from 'src/app/entities/Npc';
import { NpcService } from 'src/app/services/npc.service';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource<Npc>();

  // Determines which columns are displayed on the table
  displayedColumns: string[] = [
    'name', 'race', 'occupation',
    'country', 'town','organization', 'details', 'remove'
  ];

  constructor(private router: Router,  private NpcService: NpcService, private snackbar: MatSnackBar, private addDialog: MatDialog /**, private updateDialog: MatDialog*/) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.NpcService.getAllNpcs().subscribe(
      succ => {
        this.dataSource.data = succ;
        this.NpcService.saveData(this.dataSource.data);
      },
      err => {
        this.snackbar.open('Failed to retrieve NPCs.', 'OK', { duration: 5000 });
      }
    );
  }

  // TODO Add dialog needs to be changed to NPC add dialog to not conflict
  openAddDialog(): void {
    const dialogRef = this.addDialog.open(AddDialogComponent, {
      width: '60%',
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
            this.NpcService.saveData(this.dataSource.data);
          },
          err => {
            this.snackbar.open('Failed to add new NPC.', 'OK', { duration: 5000 });
          }
        );
      }
    });
  }

  /*
  // Update moved to details page, leaving this for reference. Just in case y'know?
  // Don't forget to uncomment the constructor and the html ng-template
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
            this.dataSource.data = this.dataSource.data;
            this.NpcService.saveData(this.dataSource.data);
          },
          err => {
            this.snackbar.open('Failed to update NPC.', 'OK', { duration: 5000 });
          }
        );
      }
    });
  }
  */

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
          this.dataSource.data = this.dataSource.data;
          this.NpcService.saveData(this.dataSource.data);
        },
        err => {
          this.snackbar.open('Failed to remove NPC.', 'OK', { duration: 5000 });
        }
      );
    }
  }

  // provided by angular, don't ask me
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detailsRouter(path, data) {
    this.router.navigate([path, data]);
  }
}
