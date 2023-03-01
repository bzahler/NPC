import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monster } from '../entities/Monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private data: Monster[];

  constructor(private client: HttpClient) { }

  getAllMonsters(): Observable<Monster[]> {
    console.log('Retrieving all monsters.');
    const values = this.client.get<Monster[]>('http://localhost:8080/monster');

    return values;
  }

  addMonster(newMonster: Monster): Observable<Monster> {
    console.log('Adding a monster.');
    const result = this.client.post<Monster>('http://localhost:8080/monster/add', newMonster);

    return result;
  }

  addMonsters(newLocs: Monster[]): Observable<Monster> {
    console.log('Adding multiple monster.');
    const result = this.client.post<Monster>('http://localhost:8080/monster/addMultiple', newLocs);

    return result;
  }

  updateMonster(updatedMonster: Monster): Observable<Monster> {
    console.log('Updating monster: ', updatedMonster);
    const result = this.client.post<Monster>('http://localhost:8080/monster/update', updatedMonster);

    return result;
  }

  removeMonster(monsterId: string): Observable<Object> {
    console.log('Removing monster: ', monsterId);
    const result = this.client.post('http://localhost:8080/monster/delete', monsterId);

    return result;
  }

  getById(id: string) {
    return this.data.find(ele => ele.monsterId === id);
  }

  getAllData() {
    return this.data;
  }

  saveData(data: Monster[]) {
    this.data = data;
  }

  printServiceData() {
    console.log(this.data);
  }
}
