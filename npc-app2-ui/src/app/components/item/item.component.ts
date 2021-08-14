import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/Item';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemList: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(
      succ => {
        this.itemList = succ;
        console.log(this.itemList);
      },
      err => {
        console.log('didnt work');
      }
    );
  }



}
