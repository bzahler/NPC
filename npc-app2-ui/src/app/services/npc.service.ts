import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Npc } from '../entities/Npc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpcService {
  data: any = [];
  constructor(private client: HttpClient) { }

getAllNpcs(): Observable<Npc[]> {
  console.log('Retrieving all NPCs.');
  const values = this.client.get<Npc[]>('http://localhost:8080/npc');
  this.data = values;
  // I used to need this? But now it causes requests to occur twice. Table works fine?
  // values.subscribe(
  //   succ => {
  //     this.data = succ;
  //     console.log('Response: ', this.data);
  //   },
  //   err => {
  //     console.log('Error retrieving all NPCs.');
  //   }
  // );
  return values;
}

addNpc(newNpc: Npc): Observable<Object> {
  console.log('Adding an NPC.');
  const result = this.client.post('http://localhost:8080/npc/add', newNpc);
  // this.data.push(newNpc);
  // I used to need this? But now it causes requests to occur twice.
  // result.subscribe(
  //   succ => {
  //     this.data.push(newNpc);
  //     console.log('Successfully added new NPC');
  //   },
  //   err => {
  //     console.log('Failed to add new NPC.');
  //   }
  // );
  return result;
}

}
