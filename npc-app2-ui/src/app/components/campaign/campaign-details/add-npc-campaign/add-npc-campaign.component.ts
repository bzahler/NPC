import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Npc } from 'src/app/entities/Npc';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NpcService } from 'src/app/services/npc.service';
import { AddCampaignDialogComponent } from '../../add-campaign-dialog/add-campaign-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-npc-campaign',
  templateUrl: './add-npc-campaign.component.html',
  styleUrls: ['./add-npc-campaign.component.css']
})
export class AddNpcCampaignComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource = new MatTableDataSource<Npc>();
  returnNpc = null;
  displayedColumns: string[] = [
    'name', 'race', 'occupation',
    'country', 'town', 'organization', 'select'
  ];
  
  constructor(public dialogRef: MatDialogRef<AddCampaignDialogComponent>, public npcServ: NpcService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource.data = this.npcServ.getAllData();
    if (!this.dataSource.data) {
      this.npcServ.getAllNpcs().subscribe(
        succ => {
          this.dataSource.data = succ;
          this.npcServ.saveData(succ);
        },
        err => {
          this.snackbar.open('Could not retrieve npcs from db.', 'OK', { duration: 5000 });
        }
      )
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectRow(index: number) {
    if (index > -1) {
      console.log(index);
      this.returnNpc = this.dataSource.data.slice(index, index + 1)[0];
      this.snackbar.open('Selected ' + this.returnNpc.name, 'OK', { duration: 2000 });
    }
  }
}
