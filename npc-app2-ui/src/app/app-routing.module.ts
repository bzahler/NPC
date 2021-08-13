import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpcComponent } from './components/npc/npc.component';
import { NpcDetailsComponent } from './components/npc/npc-details/npc-details.component';
import { HomeComponent } from './components/home/home.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { CampaignDetailsComponent } from './components/campaign/campaign-details/campaign-details.component';
import { LocationComponent } from './components/location/location.component';
import { LocationDetailsComponent } from './components/location/location-details/location-details.component';
import { PlayerCharsComponent } from './components/player-chars/player-chars.component';
import { PlayerCharDetailsComponent } from './components/player-chars/player-char-details/player-char-details.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  {
    path: 'npc',
    component: NpcComponent
  },
  {
    path: 'npc-details/:id',
    component: NpcDetailsComponent
  },
  {
    path: 'campaign',
    component: CampaignComponent
  },
  {
    path: 'campaign-details/:id',
    component: CampaignDetailsComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path:'location-details/:id',
    component: LocationDetailsComponent
  },
  {
    path: 'playerChar',
    component: PlayerCharsComponent
  },
  {
    path:'player-char-details/:id',
    component: PlayerCharDetailsComponent
  },
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
