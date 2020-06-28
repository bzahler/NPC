import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../entities/Location';
import { LocationLists } from '../entities/LocationLists';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private data: Location[];

  constructor(private client: HttpClient) { }

  getAllLocations(): Observable<Location[]> {
    console.log('Retrieving all Locations.');
    const values = this.client.get<Location[]>('http://localhost:8080/loc');

    return values;
  }

  addLocation(newLoc: Location): Observable<Location> {
    console.log('Adding a location.');
    const result = this.client.post<Location>('http://localhost:8080/loc/add', newLoc);

    return result;
  }

  updateLocation(updatedLoc: Location): Observable<Location> {
    console.log('Updating location: ', updatedLoc);
    const result = this.client.post<Location>('http://localhost:8080/loc/update', updatedLoc);

    return result;
  }

  removeLocation(locId: String): Observable<Object> {
    console.log('Removing location: ', locId);
    const result = this.client.post('http://localhost:8080/loc/delete', locId);

    return result;
  }

  getLists(locId: String): Observable<LocationLists> {
    console.log('Getting location lists for: ', locId);
    const result = this.client.post<LocationLists>('http://localhost:8080/loc/getLists', locId);

    return result;
  }

  getbyId(id: string) {
    return this.data.find(loc => loc.locationId === id);
  }

  getAllData() {
    return this.data;
  }

  saveData(data: Location[]) {
    this.data = data;
  }

  printServiceData() {
    console.log(this.data);
  }

}
