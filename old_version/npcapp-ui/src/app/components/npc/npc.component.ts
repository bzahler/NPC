import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Npc } from '../../beans/Npc';
import { NpcService } from '../../services/npc.service';
import { AddDialog } from './addDialog/addDialog';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {

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
        this.snackbar.open('Failed to retrieve NPCs.', 'OK', { duration: 5000});
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialog, {
      width: '50%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if(dialogReturn) {
        console.log(dialogReturn);
        this.NpcService.addNpc(dialogReturn).subscribe(
          succ => {
            this.dataSource.data = this.NpcService.data;
          },
          err => {
            this.snackbar.open('Failed to add new NPC.', 'OK', {duration: 5000});
          }
        );
      }     
    });
  }
}
