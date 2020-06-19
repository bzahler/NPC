import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NpcService } from 'src/app/services/npc.service';
import { Npc } from 'src/app/entities/Npc';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-npc-details',
  templateUrl: './npc-details.component.html',
  styleUrls: ['./npc-details.component.css']
})
export class NpcDetailsComponent implements OnInit {

  id: string;
  data: Npc;
  editable: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private snackbar: MatSnackBar, private npcService: NpcService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get("id");
    });
    this.data = this.npcService.getById(this.id);
    console.log(this.data);
  }

  toggleEditable() {
    this.editable = !this.editable;
  }

  saveNpc() {

    this.npcService.updateNpc(this.data).subscribe(
      succ => {
        this.snackbar.open('Updated ' + this.data.name, 'OK', { duration: 5000 });
      },
      err => {
        this.snackbar.open('Failed to update ' + this.data.name, 'OK', { duration: 5000 });
        // Ideally this would undo your edits
      }
    );
    this.toggleEditable();
  }
}
