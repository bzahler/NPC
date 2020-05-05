import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NpcService } from 'src/app/services/npc.service';
import { Npc } from 'src/app/entities/Npc';

@Component({
  selector: 'app-npc-details',
  templateUrl: './npc-details.component.html',
  styleUrls: ['./npc-details.component.css']
})
export class NpcDetailsComponent implements OnInit {

  id: string;
  data: Npc;

  constructor(private activeRoute: ActivatedRoute, private npcService: NpcService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
    this.data = this.npcService.getById(this.id);
    console.log(this.data);
  }

}
