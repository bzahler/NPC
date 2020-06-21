import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpcComponent } from './components/npc/npc.component';
import { NpcDetailsComponent } from './components/npc/npc-details/npc-details.component';
import { HomeComponent } from './components/home/home.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { CampaignDetailsComponent } from './components/campaign/campaign-details/campaign-details.component';

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
