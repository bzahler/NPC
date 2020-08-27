import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/entities/Campaign';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-campaign-dialog',
  templateUrl: './add-campaign-dialog.component.html',
  styleUrls: ['./add-campaign-dialog.component.css']
})
export class AddCampaignDialogComponent implements OnInit{

  // newCampaign = new Campaign()

  // Quick fix for the fact that I don't have functionality for the arrays,
  // but the backend is expecting it. Check the html too
  newCampaign = new Campaign();

  constructor(public dialogRef: MatDialogRef<AddCampaignDialogComponent>) { }

  ngOnInit() {
    this.newCampaign.listNpc = [];
    this.newCampaign.listLocation = [];
    this.newCampaign.listPc = [];
    this.newCampaign.listQuest = [];
    this.newCampaign.sessionNotes = [];
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

}
