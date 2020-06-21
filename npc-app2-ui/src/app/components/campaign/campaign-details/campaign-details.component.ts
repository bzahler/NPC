import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/entities/Campaign';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  id: string;
  data: Campaign;
  editable: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private snackbar: MatSnackBar, private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.data = this.campaignService.getById(this.id);
    console.log(this.data);
  }

  toggleEditable() {
    this.editable = !this.editable;
  }

  saveCampaign() {
    this.campaignService.updateCampaign(this.data).subscribe(
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
