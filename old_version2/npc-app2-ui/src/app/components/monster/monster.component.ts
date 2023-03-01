import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Monster } from 'src/app/entities/Monster';
import { MonsterService } from 'src/app/services/monster.service';
import { AddMonsterDialogComponent } from './add-monster-dialog/add-monster-dialog.component';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource<Monster>();

  displayedColumns: string[] = [
    'name','monsterType','alignment','challengeRating','searchTags','details','remove'
  ]

  constructor(private router: Router, private monsterService: MonsterService, private snackbar: MatSnackBar, private addDialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.monsterService.getAllMonsters().subscribe(
      succ => {
        this.dataSource.data = succ;
        this.monsterService.saveData(this.dataSource.data);
      },
      err => {
        this.snackbar.open('Failed to retrieve monsters.', 'OK', { duration: 5000 });
      }
    )
  }

  openAddDialog(): void {
    const dialogRef = this.addDialog.open(AddMonsterDialogComponent, {
      width: '60%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.monsterService.addMonster(dialogReturn).subscribe(
          succ => {
            this.snackbar.open('Successfully added new monster.', 'OK', { duration: 2000 });
            console.log('Received from server: ', succ);
            this.dataSource.data.push(succ);
            this.dataSource.data = this.dataSource.data;
            this.monsterService.saveData(this.dataSource.data);
          },
          err => {
            this.snackbar.open('Failed to add new monster.', 'OK', { duration: 5000 });
          }
        );
      }
    });
  }

  removeRow(index: number) {
    if (index > -1) {
      console.log(index);
      let monster = this.dataSource.data.slice(index, index + 1)[0];
      console.log(monster);
      let monsterId = monster.monsterId;
      this.monsterService.removeMonster(monsterId).subscribe(
        succ => {
          this.snackbar.open('Successfully removed monster.', 'OK', { duration: 5000 });
          this.dataSource.data.splice(index, 1);
          this.dataSource.data = this.dataSource.data;
          this.monsterService.saveData(this.dataSource.data);
        },
        err => {
          this.snackbar.open('Failed to remove monster.', 'OK', { duration: 5000 });
        }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detailsRouter(path, data) {
    this.router.navigate([path, data]);
  }
}
