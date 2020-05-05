import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Npc } from '../entities/Npc';

@Injectable({
  providedIn: 'root'
})
export class NpcService {

  private data: Npc[];

  constructor(private client: HttpClient) { }

  getAllNpcs(): Observable<Npc[]> {
    console.log('Retrieving all NPCs.');
    const values = this.client.get<Npc[]>('http://localhost:8080/npc');

    return values;
  }

  /**
   * This returns the npc so that the server generated object id can be connected to the object (used for removal).
   */
  addNpc(newNpc: Npc): Observable<Npc> {
    console.log('Adding an NPC.');
    const result = this.client.post<Npc>('http://localhost:8080/npc/add', newNpc);

    return result;
  }

  updateNpc(updatedNpc: Npc): Observable<Object> {
    console.log('Updating npc: ', updatedNpc);
    const result = this.client.post('http://localhost:8080/npc/update', updatedNpc);

    return result;
  }

  removeNpc(npcId: String): Observable<Object> {
    console.log('Removing npc: ', npcId);
    const result = this.client.post('http://localhost:8080/npc/delete', npcId);
    
    return result;
  }

  getById(id: string) {
    return this.data.find(npc => npc.npcId === id);
  }

  getAllData() {
    return this.data;
  }

  saveData(data: Npc[]) {
    this.data = data;
  }

  printServiceData() {
    console.log(this.data);
  }

}



    // I used to need this? But now it causes requests to occur twice. Table works fine without it?
    // values.subscribe(
    //   succ => {
    //     this.data = succ;
    //     console.log('Response: ', this.data);
    //   },
    //   err => {
    //     console.log('Error retrieving all NPCs.');
    //   }
    // );