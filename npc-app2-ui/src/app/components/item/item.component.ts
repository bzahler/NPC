import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Item } from 'src/app/entities/Item';
import { ItemService } from 'src/app/services/item.service';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  baseItemList: Item[] = [];
  activeItemList: Item[] = [];
  cardColor: string = 'rgba(128, 128, 128, 0.315)';

  constructor(private router: Router, private ItemService: ItemService, private snackbar: MatSnackBar, private addDialog: MatDialog /**, private updateDialog: MatDialog*/) { }

  ngOnInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;

    this.ItemService.getAllItems().subscribe(
      succ => {
        this.activeItemList = succ;
        this.baseItemList = succ;
        this.ItemService.saveData(this.baseItemList);

        // this.dataSource.data = succ;
        // this.ItemService.saveData(this.dataSource.data);
      },
      err => {
        this.snackbar.open('Failed to retrieve Items.', 'OK', { duration: 5000 });
      }
    );
  }

  // TODO Add dialog needs to be changed to Item add dialog to not conflict
  openAddDialog(): void {
    const dialogRef = this.addDialog.open(AddItemDialogComponent, {
      width: '60%',
      height: '50%'
    });
    dialogRef.afterClosed().subscribe(dialogReturn => {
      if (dialogReturn) {
        this.ItemService.addItem(dialogReturn).subscribe(
          succ => {
            this.snackbar.open('Successfully added new Item.', 'OK', { duration: 2000 });
            console.log('Received from server: ', succ);
            this.baseItemList.push(succ);
            this.ItemService.saveData(this.baseItemList);
          },
          err => {
            this.snackbar.open('Failed to add new Item.', 'OK', { duration: 5000 });
          }
        );
      }
    });
  }

  applyFilter(event: Event) {
    // filterValue = whatever is in the textbox
    const filterValue = (event.target as HTMLInputElement).value;
    this.activeItemList = [];

    // concatenate the values of an object and lowercase them (and the filtervalue)
    this.baseItemList.forEach( ele => {
      let values = Object.values(ele);
      let stringified = values.join().toLowerCase();
      if (stringified.includes(filterValue.toLowerCase())) {
        this.activeItemList.push(ele);
      }
    });

    // then check if it exists within that and return true.
  }

  detailsRouter(path, data) {
    this.router.navigate([path, data]);
  }
}
