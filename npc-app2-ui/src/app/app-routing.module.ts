import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpcComponent } from './components/npc/npc.component';

const routes: Routes = [
  {
    path: 'npc',
    component: NpcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
