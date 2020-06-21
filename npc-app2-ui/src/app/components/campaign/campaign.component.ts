import { Component, OnInit, ViewChild } from '@angular/core';
import { Campaign } from 'src/app/entities/Campaign';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<Campaign>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource<Campaign>();

  displayedColumns: string[] = [
    'name', 'startDate'
  ]

  constructor(private router: Router, private CampaignSerivce: CampaignService, private snackbar: MatSnackBar, private addDialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.CampaignSerivce.getAllCampaigns().subscribe(
      succ => {
        this.dataSource.data = succ;
        this.CampaignSerivce.saveData(this.dataSource.data);
      },
      err => {
        this.snackbar.open('Failed to retrieve campaigns.', 'OK', {duration: 5000});
      }
    )
  }

  openAddDialog(): void {
    const dialogRef = this.addDialog.open(CampaignDialogComponent, {
      width: '60%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if(dialogReturn) {
        this.CampaignSerivce.addCampaign(dialogReturn).subscribe(
          succ => {
            this.snackbar.open('Successfully added new campaign.', 'OK', {duration: 2000});
            console.log('Received from server: ', succ);
            this.dataSource.data = this.dataSource.data;
            this.CampaignSerivce.saveData(this.dataSource.data);
          },
          err => {
            this.snackbar.open('Failed to add new campaign.', 'OK', {duration: 5000});
          }
        );
      }
    });
  }

  removeRow(index: number) {
    if (index > -1) {
      console.log(index);
      let campaign = this.dataSource.data.slice(index, index+1)[0];
      console.log(campaign);
      let campaignId = campaign.campaignId;
      this.CampaignSerivce.removeCampaign(campaignId).subscribe(
        succ => {
          this.snackbar.open('Successfully removed campaign.', 'OK', {duration: 5000});
          this.dataSource.data.splice(index, 1);
          this.dataSource.data = this.dataSource.data;
          this.CampaignSerivce.saveData(this.dataSource.data);
        },
        err => {
          this.snackbar.open('Failed to remove campaign.', 'OK', {duration: 5000});
        }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
