import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { Npc } from 'src/app/beans/Npc';
import { NpcService } from 'src/app/services/npc.service';

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
  
  constructor(private NpcService: NpcService, private snackbar: MatSnackBar) { }

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

}
