import { Component, OnInit, ViewChild } from '@angular/core';
import { Campaign } from 'src/app/entities/Campaign';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

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

}
