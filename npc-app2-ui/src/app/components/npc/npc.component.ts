import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Npc } from 'src/app/entities/Npc';
import { NpcService } from 'src/app/services/npc.service';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.css']
})
export class NpcComponent implements OnInit {

  baseNpcList: Npc[] = [];
  activeNpcList: Npc[] = [];

  constructor(private router: Router, private NpcService: NpcService, private snackbar: MatSnackBar, private addDialog: MatDialog /**, private updateDialog: MatDialog*/) { }

  ngOnInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;

    this.NpcService.getAllNpcs().subscribe(
      succ => {
        this.activeNpcList = succ;
        this.baseNpcList = succ;
        this.NpcService.saveData(this.baseNpcList);

        // this.dataSource.data = succ;
        // this.NpcService.saveData(this.dataSource.data);
      },
      err => {
        this.snackbar.open('Failed to retrieve NPCs.', 'OK', { duration: 5000 });
      }
    );
  }

  // TODO Add dialog needs to be changed to NPC add dialog to not conflict
  openAddDialog(): void {
    const dialogRef = this.addDialog.open(AddDialogComponent, {
      width: '60%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.NpcService.addNpc(dialogReturn).subscribe(
          succ => {
            this.snackbar.open('Successfully added new NPC.', 'OK', { duration: 2000 });
            console.log('Received from server: ', succ);
            this.baseNpcList.push(succ);
            this.NpcService.saveData(this.baseNpcList);
          },
          err => {
            this.snackbar.open('Failed to add new NPC.', 'OK', { duration: 5000 });
          }
        );
      }
    });
  }

  applyFilter(event: Event) {
    // filterValue = whatever is in the textbox
    const filterValue = (event.target as HTMLInputElement).value;

    // stringify each Npc
    let stringifiedNpcList: string[] = [];
    this.baseNpcList.forEach(ele => {
      stringifiedNpcList.push(JSON.stringify(ele));
    });
    console.log(stringifiedNpcList);
    let filtered = stringifiedNpcList.filter(ele =>
      ele.includes(filterValue)
    );

    filtered.forEach(ele => {
      this.activeNpcList.push(JSON.parse(ele));
    });
  }

  detailsRouter(path, data) {
    this.router.navigate([path, data]);
  }
}
