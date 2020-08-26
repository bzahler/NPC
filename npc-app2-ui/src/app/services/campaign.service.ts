import { Injectable } from '@angular/core';
import { Campaign } from '../entities/Campaign';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CampaignLists } from '../entities/CampaignLists';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private data: Campaign[];

  constructor(private client: HttpClient) { }

  getAllCampaigns(): Observable<Campaign[]> {
    console.log('Retrieving all Campaigns.');
    const values = this.client.get<Campaign[]>('http://localhost:8080/campaign');

    return values;
  }

  /**
   * This returns the campaign so that the server generated object id can be connected to the object (used for removal).
   */
  addCampaign(newCampaign: Campaign): Observable<Campaign> {
    console.log('Adding a campaign.');
    const result = this.client.post<Campaign>('http://localhost:8080/campaign/add', newCampaign);

    return result;
  }

  updateCampaign(updatedCampaign: Campaign): Observable<Campaign> {
    console.log('Updating campaign: ', updatedCampaign);
    const result = this.client.post<Campaign>('http://localhost:8080/campaign/update', updatedCampaign);

    return result;
  }

  removeCampaign(campaignId: String): Observable<Object> {
    console.log('Removing campaign: ', campaignId);
    const result = this.client.post('http://localhost:8080/campaign/delete', campaignId);

    return result;
  }

  getLists(campaignId: string): Observable<CampaignLists> {
    console.log('Getting location lists for: ', campaignId);
    const result = this.client.post<CampaignLists>('http://localhost:8080/campaign/getLists', campaignId);

    return result;
  }

  getById(id: string) {
    return this.data.find(campaign => campaign.campaignId === id);
  }

  getAllData() {
    return this.data;
  }

  saveData(data: Campaign[]) {
    this.data = data;
  }

  printServiceData() {
    console.log(this.data);
  }
}
