import { Component, OnInit, ViewChild } from '@angular/core';
import { Campaign } from 'src/app/entities/Campaign';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CampaignService } from 'src/app/services/campaign.service';
import { CampaignLists } from 'src/app/entities/CampaignLists';
import { Npc } from 'src/app/entities/Npc';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Location } from 'src/app/entities/Location';
import { AddNpcCampaignComponent } from './add-npc-campaign/add-npc-campaign.component';
import { AddLocationCampaignComponent } from './add-location-campaign/add-location-campaign.component';
import { PlayerCharacter } from 'src/app/entities/PlayerCharacter';
import { AddPlayerCharCampaignComponent } from './add-player-char-campaign/add-player-char-campaign.component';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  id: string;
  data: Campaign;
  editable: boolean = false;
  lists: CampaignLists;
  blankNpc = new Npc();

  // Npc Table
  @ViewChild(MatPaginator, { static: true }) NpcPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) NpcTableSort: MatSort;
  npcDataSource = new MatTableDataSource<Npc>();
  npcDisplayedColumns: string[] = [
    'name', 'race', 'occupation',
    'country', 'town', 'organization', 'details', 'remove'
  ];

  // SubLocation Table
  @ViewChild(MatPaginator, { static: true }) subLocPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) subLocTableSort: MatSort;
  subLocDataSource = new MatTableDataSource<Location>();
  subLocDisplayedColumns: string[] = [
    'name', 'summary', 'details', 'remove'
  ];

  // Player Character table
  @ViewChild(MatPaginator, { static: true }) pcPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) pcTableSort: MatSort;
  pcDataSource = new MatTableDataSource<PlayerCharacter>();

  pcDisplayedColumns: string[] = [
    'charName', 'playerName', 'charRace', 'charClass', 'phbBackground', 'details', 'remove'
  ];

  constructor(private activeRoute: ActivatedRoute, private snackbar: MatSnackBar, private campaignService: CampaignService, private addNpcDialog: MatDialog, private addSubLocDialog: MatDialog, private addPCDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    // check if the service has the data or not
    let checkService = this.campaignService.getAllData();
    // if it doesn't, update the service before getting the data
    if (!checkService) {
      this.campaignService.getAllCampaigns().subscribe(
        succ => {
          this.campaignService.saveData(succ);
          this.data = this.campaignService.getById(this.id);
        },
        err => {
          this.snackbar.open('Could not retrieve locations from db.', 'OK', { duration: 5000 });
        }
      );
      // else just get the data
    } else {
      this.data = this.campaignService.getById(this.id);
    }

    this.campaignService.getLists(this.id).subscribe(
      succ => {
        this.lists = succ;
        console.log(this.lists);
        this.npcDataSource.data = this.lists.npcList;
        this.subLocDataSource.data = this.lists.subLocations;
        this.pcDataSource.data = this.lists.pcList;
        
      },
      err => {
        this.snackbar.open('Failed to retrieve sub-lists', 'OK', { duration: 5000 });
      }
    )
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
    this.editable = false;
  }

  removeNpcRow(index: number) {
    if (index > -1) {
      console.log(index);
      // find which npc to remove
      let npc = this.npcDataSource.data.slice(index, index + 1)[0];
      console.log(npc);
      let npcId = npc.npcId;

      // remove it from the object and save it
      let npcIndex = this.data.listNpc.findIndex(id => id === npcId);
      this.data.listNpc.splice(npcIndex, npcIndex + 1);
      this.campaignService.updateCampaign(this.data).subscribe(
        succ => {
          this.snackbar.open('Updated ' + this.data.name, 'OK', { duration: 5000 });
          // remove it from the datasource
          this.npcDataSource.data.splice(index, index + 1);
          this.npcDataSource.data = this.npcDataSource.data;
        },
        err => {
          this.snackbar.open('Failed to update ' + this.data.name +
            '. You should refresh the page to prevent data inconsistency.',
            'OK', { duration: 5000 });
        }
      );
    }
  }

  removeSubLocRow(index: number) {
    if (index > -1) {
      console.log(index);
      let loc = this.subLocDataSource.data.slice(index, index + 1)[0];
      console.log(loc);
      let locId = loc.locationId;

      // remove it from the object and save it
      let locIndex = this.data.listLocation.findIndex(id => id === locId);
      this.data.listLocation.splice(locIndex, locIndex + 1);
      this.campaignService.updateCampaign(this.data).subscribe(
        succ => {
          this.snackbar.open('Updated ' + this.data.name, 'OK', { duration: 5000 });
          // remove it from the datasource
          this.subLocDataSource.data.splice(index, index + 1);
          this.subLocDataSource.data = this.subLocDataSource.data;
        },
        err => {
          this.snackbar.open('Failed to update ' + this.data.name +
            '. You should refresh the page to prevent data inconsistency.',
            'OK', { duration: 5000 });
        }
      );
    }
  }

  removePCRow(index: number) {
    if (index > -1) {
      console.log(index);
      let pc = this.pcDataSource.data.slice(index, index + 1)[0];
      console.log(pc);
      let pcId = pc.playerId;

      // remove it from the object and save it
      let pcIndex = this.data.listPc.findIndex(id => id === pcId);
      this.data.listPc.splice(pcIndex, pcIndex + 1);
      this.campaignService.updateCampaign(this.data).subscribe(
        succ => {
          this.snackbar.open('Updated ' + this.data.name, 'OK', { duration: 5000 });
          // remove it from the datasource
          this.pcDataSource.data.splice(index, index + 1);
          this.pcDataSource.data = this.pcDataSource.data;
        },
        err => {
          this.snackbar.open('Failed to update ' + this.data.name +
            '. You should refresh the page to prevent data inconsistency.',
            'OK', { duration: 5000 });
        }
      );
    }
  }

  openAddNpcDialog(): void {
    const dialogRef = this.addNpcDialog.open(AddNpcCampaignComponent, {
      width: '90%',
      height: '90%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.data.listNpc.push(dialogReturn.npcId);
        this.saveCampaign();
        this.npcDataSource.data.push(dialogReturn);
        this.npcDataSource.data = this.npcDataSource.data;
      }
    });
  }

  openAddSubLocDialog(): void {
    const dialogRef = this.addSubLocDialog.open(AddLocationCampaignComponent, {
      width: '90%',
      height: '90%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.data.listLocation.push(dialogReturn.locationId);
        this.saveCampaign();
        this.subLocDataSource.data.push(dialogReturn);
        this.subLocDataSource.data = this.subLocDataSource.data;
      }
    });
  }

  openAddPCDialog(): void {
    const dialogRef = this.addPCDialog.open(AddPlayerCharCampaignComponent, {
      width: '90%',
      height: '90%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.data.listPc.push(dialogReturn.playerId);
        this.saveCampaign();
        this.pcDataSource.data.push(dialogReturn);
        this.pcDataSource.data = this.pcDataSource.data;
      }
    });
  }

  removeCampaign() {
    this.campaignService.removeCampaign(this.data.campaignId).subscribe(
      succ => {
        this.deleteRouter('/campaign');
      },
      err => {
        this.snackbar.open('Failed to delete ' + this.data.name, 'OK', { duration: 5000 });
      }
    )
  }

  deleteRouter(path) {
    this.router.navigate([path]);
  }

  detailsRouter(path, data) {
    this.router.navigate([path, data]);
  }
}
