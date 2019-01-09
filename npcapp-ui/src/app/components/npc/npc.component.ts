import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
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
  
  constructor(private NpcService: NpcService) { }

  ngOnInit() {
    this.NpcService.getAllNpcs().subscribe();
  }

}
