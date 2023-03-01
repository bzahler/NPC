import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../entities/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private data: Item[];

  constructor(private client: HttpClient) { }

  getAllItems():Observable<Item[]> {
    console.log('Retrieving all Items.');
    const values = this.client.get<Item[]>('http://localhost:8080/item');

    return values
  }

  addItem(newItem: Item): Observable<Item> {
    console.log('Adding an Item.');
    const result = this.client.post<Item>('http://localhost:8080/item/add', newItem);

    return result;
  }

  updateItem(updatedItem: Item): Observable<Item> {
    console.log('Updating item: ', updatedItem);
    const result = this.client.post<Item>('http://localhost:8080/item/update', updatedItem);

    return result;
  }

  removeItem(itemId: String): Observable<Object> {
    console.log('Removing item: ', itemId);
    const result = this.client.post('http://localhost:8080/item/delete', itemId);
    
    return result;
  }

  getById(id: string) {
    return this.data.find(item => item.itemId === id);
  }

  getAllData() {
    return this.data;
  }

  saveData(data: Item[]) {
    this.data = data;
  }
}
