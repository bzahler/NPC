import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Npc } from '../beans/Npc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpcService {

  data: any = [];
  constructor(private client: HttpClient) { }

/******************************************************
 * FUNCTIONS
 ******************************************************/

 getAllNpcs(): Observable<Npc[]> {
  console.log('Retrieving all NPCs.');
  const values =  this.client.get<Npc[]>('http://localhost:8080/npc');
  values.subscribe(
    succ => {
      console.log('Response: ');
      this.data = succ;
      console.log(this.data);
    },
    err => {
      console.log('Error retrieving all NPCs.');
    }
  );
  return values;
 }
}
