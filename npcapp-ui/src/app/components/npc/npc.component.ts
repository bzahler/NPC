import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { Npc } from 'src/app/beans/Npc';
import { NpcService } from 'src/app/services/npc.service';
import { AddDialog } from './addDialog/addDialog';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {

  dataSource = new MatTableDataSource<Npc>();

  displayedColumns: string[] = [
    'id', 'name', 'campaign', 'race', 'occupation', 
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
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed returning: ', result);
    })
  }
}
