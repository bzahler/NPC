import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private activeRoute: ActivatedRoute, private snackbar: MatSnackBar, private npcService: NpcService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    // check if the service has the data or not
    let checkService = this.npcService.getAllData();
    // if it doesn't, update the service before getting the data
    if (!checkService) {
      this.npcService.getAllNpcs().subscribe(
        succ => {
          this.npcService.saveData(succ);
          this.data = this.npcService.getById(this.id);
        },
        err => {
          this.snackbar.open('Could not retrieve npcs from db.', 'OK', { duration: 5000 });
        }
      );
      // else just get the data
    } else {
      this.data = this.npcService.getById(this.id);
    }

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
    this.editable = false;
  }

  removeNpc() {
    this.npcService.removeNpc(this.data.npcId).subscribe(
      succ => {
        this.deleteRouter('/npc');
      },
      err => {
        this.snackbar.open('Failed to delete ' + this.data.name, 'OK', { duration: 5000 });
      }
    )
  }

  deleteRouter(path) {
    this.router.navigate([path]);
  }
}
