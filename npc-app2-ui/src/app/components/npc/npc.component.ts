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
    'personalityDesc', 'organization', 'comments'
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
      if(dialogReturn) {
        this.NpcService.addNpc(dialogReturn).subscribe(
          succ => {
            this.dataSource.data.push(dialogReturn);
            this.NpcService.data = this.dataSource.data;
            this.table.renderRows();
          },
          err => {
            this.snackbar.open('Failed to add new NPC.', 'OK', {duration: 5000});
          }
        );
      }     
    });
  }

  refresh() {

  }
}
