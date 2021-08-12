import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../entities/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private client: HttpClient) { }

  getAllItems():Observable<Item[]> {
    console.log('Retrieving all Items.');
    const values = this.client.get<Item[]>('http://localhost:8080/item');

    return values
  }
}
