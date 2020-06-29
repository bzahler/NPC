import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from 'src/app/entities/Location';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocationService } from 'src/app/services/location.service';
import { LocationLists } from 'src/app/entities/LocationLists';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Npc } from 'src/app/entities/Npc';

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

  // Npc Table
  @ViewChild(MatPaginator, {static: true}) NpcPaginator: MatPaginator; 
  @ViewChild(MatSort, {static: true}) NpcTableSort: MatSort;
  npcDataSource = new MatTableDataSource<Npc>();
  npcDisplayedColumns: string[] = [
    'name', 'race', 'occupation',
    'country', 'town','organization', 'remove'
  ];

  // SubLocation Table
  @ViewChild(MatPaginator, {static: true}) subLocPaginator: MatPaginator; 
  @ViewChild(MatSort, {static: true}) subLocTableSort: MatSort;
  subLocDataSource = new MatTableDataSource<Npc>();
  subLocDisplayedColumns: string[] = [
    'name', 'summary', 'remove'
  ];

  constructor(private activeRoute: ActivatedRoute, private snackbar: MatSnackBar, private locationService: LocationService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.data = this.locationService.getbyId(this.id);

    this.locationService.getLists(this.id).subscribe(
      succ => {
        this.lists = succ;
        console.log(this.lists);
        this.npcDataSource.data = this.lists.npcList;
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
    this.toggleEditable();
  }

}
