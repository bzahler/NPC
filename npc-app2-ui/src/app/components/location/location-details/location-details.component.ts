import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from 'src/app/entities/Location';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocationService } from 'src/app/services/location.service';
import { LocationLists } from 'src/app/entities/LocationLists';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Npc } from 'src/app/entities/Npc';
import { MatDialog } from '@angular/material/dialog';
import { AddLocationNpcComponent } from './add-location-npc/add-location-npc.component';
import { AddLocationSublocComponent } from './add-location-subloc/add-location-subloc.component';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  id: string;
  data: Location;
  editable: boolean = false;
  lists: LocationLists;
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

  constructor(private activeRoute: ActivatedRoute, private snackbar: MatSnackBar, private locationService: LocationService, private addNpcDialog: MatDialog, private addSubLocDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    // check if the service has the data or not
    let checkService = this.locationService.getAllData();
    // if it doesn't, update the service before getting the data
    if (!checkService) {
      this.locationService.getAllLocations().subscribe(
        succ => {
          this.locationService.saveData(succ);
          this.data = this.locationService.getById(this.id);
        },
        err => {
          this.snackbar.open('Could not retrieve locations from db.', 'OK', { duration: 5000 });
        }
      );
      // else just get the data
    } else {
      this.data = this.locationService.getById(this.id);
    }

    this.locationService.getLists(this.id).subscribe(
      succ => {
        this.lists = succ;
        console.log(this.lists);
        this.npcDataSource.data = this.lists.npcList;
        this.subLocDataSource.data = this.lists.subLocations;
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

  saveLoc() {
    this.locationService.updateLocation(this.data).subscribe(
      succ => {
        this.snackbar.open('Updated ' + this.data.name, 'OK', { duration: 5000 });
      },
      err => {
        this.snackbar.open('Failed to update ' + this.data.name, 'OK', { duration: 5000 });
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
      this.locationService.updateLocation(this.data).subscribe(
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
      let locIndex = this.data.listSubLocation.findIndex(id => id === locId);
      this.data.listSubLocation.splice(locIndex, locIndex + 1);
      this.locationService.updateLocation(this.data).subscribe(
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

  openAddNpcDialog(): void {
    const dialogRef = this.addNpcDialog.open(AddLocationNpcComponent, {
      width: '90%',
      height: '90%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.data.listNpc.push(dialogReturn.npcId);
        this.saveLoc();
        this.npcDataSource.data.push(dialogReturn);
        this.npcDataSource.data = this.npcDataSource.data;
      }
    });
  }

  openAddSubLocDialog(): void {
    const dialogRef = this.addSubLocDialog.open(AddLocationSublocComponent, {
      width: '90%',
      height: '90%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.data.listSubLocation.push(dialogReturn.locationId);
        this.saveLoc();
        this.subLocDataSource.data.push(dialogReturn);
        this.subLocDataSource.data = this.subLocDataSource.data;
      }
    });
  }

  detailsRouter(path, data) {
    this.router.navigate([path, data]);
  }

}
