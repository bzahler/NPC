import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Monster } from 'src/app/entities/Monster';
import { MonsterService } from 'src/app/services/monster.service';

@Component({
  selector: 'app-monster-details',
  templateUrl: './monster-details.component.html',
  styleUrls: ['./monster-details.component.css']
})
export class MonsterDetailsComponent implements OnInit {

  id: string;
  data: Monster;
  editable: boolean = false;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private snackbar: MatSnackBar, private monsterService: MonsterService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    // check if the service has the data or not
    let checkService = this.monsterService.getAllData();
    // if it doesn't, update the service before getting the data
    if (!checkService) {
      this.monsterService.getAllMonsters().subscribe(
        succ => {
          this.monsterService.saveData(succ);
          this.data = this.monsterService.getById(this.id);
        },
        err => {
          this.snackbar.open('Could not retrieve Monsters from db.', 'OK', { duration: 5000 });
        }
      );
      // else just get the data
    } else {
      this.data = this.monsterService.getById(this.id);
    }
  }

  toggleEditable() {
    this.editable = !this.editable;
  }
  
  saveMonster() {

    this.monsterService.updateMonster(this.data).subscribe(
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

  removeMonster() {
    this.monsterService.removeMonster(this.data.monsterId).subscribe(
      succ => {
        this.deleteRouter('/monster');
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
