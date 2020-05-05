import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpcComponent } from './components/npc/npc.component';
import { NpcDetailsComponent } from './components/npc/npc-details/npc-details.component';

const routes: Routes = [
  {
    path: 'npc',
    component: NpcComponent
  },
  {
    path: 'npc-details/:id',
    component: NpcDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
