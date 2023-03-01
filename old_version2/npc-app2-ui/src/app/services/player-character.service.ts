import { Injectable } from '@angular/core';
import { PlayerCharacter } from '../entities/PlayerCharacter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerCharacterService {

  private data: PlayerCharacter[];

  constructor(private client: HttpClient) { }

  getAllPlayerChars(): Observable<PlayerCharacter[]> {
    console.log('Retrieving all PlayerChars.');
    const values = this.client.get<PlayerCharacter[]>('http://localhost:8080/playerChar');

    return values;
  }

  addPlayerChar(newPC: PlayerCharacter): Observable<PlayerCharacter> {
    console.log('Adding a Player Character.');
    const result = this.client.post<PlayerCharacter>('http://localhost:8080/playerChar/add', newPC);

    return result;
  }

  updatePlayerChar(updatedPC: PlayerCharacter): Observable<PlayerCharacter> {
    console.log('Updating player character: ', updatedPC);
    const result = this.client.post<PlayerCharacter>('http://localhost:8080/playerChar/update', updatedPC);

    return result;
  }

  removePlayerChar(pcId: string): Observable<Object> {
    console.log('Removing player character: ', pcId);
    const result = this.client.post('http://localhost:8080/playerChar/delete', pcId);

    return result;
  }

  getById(id: string) {
    return this.data.find(pc => pc.playerId === id);
  }

  getAllData() {
    return this.data;
  }

  saveData(data: PlayerCharacter[]) {
    this.data = data;
  }

  printServiceData() {
    console.log(this.data);
  }

}
