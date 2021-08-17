import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/entities/Item';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  id: string;
  data: Item;
  editable: boolean = false;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private snackbar: MatSnackBar, private itemService: ItemService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    // check if the service has the data or not
    let checkService = this.itemService.getAllData();
    // if it doesn't, update the service before getting the data
    if (!checkService) {
      this.itemService.getAllItems().subscribe(
        succ => {
          this.itemService.saveData(succ);
          this.data = this.itemService.getById(this.id);
        },
        err => {
          this.snackbar.open('Could not retrieve items from db.', 'OK', { duration: 5000 });
        }
      );
      // else just get the data
    } else {
      this.data = this.itemService.getById(this.id);
    }

  }

  toggleEditable() {
    this.editable = !this.editable;
  }

  saveNpc() {

    this.itemService.updateItem(this.data).subscribe(
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

  removeItem() {
    this.itemService.removeItem(this.data.itemId).subscribe(
      succ => {
        this.deleteRouter('/item');
      },
      err => {
        this.snackbar.open('Failed to delete ' + this.data.name, 'OK', { duration: 5000 });
      }
    )
  }

  deleteRouter(path) {
    this.router.navigate([path]);
  }
}
