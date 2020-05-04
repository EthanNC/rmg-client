import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';
import { AddGuildComponent } from './add-guild/add-guild.component';



const routes: Routes = [
  {
    path:'servers', 
    component: ServersComponent

  },
  {path: 'servers/:name', component: ServerDetailComponent },
  {path: '',  redirectTo: '/servers', pathMatch: 'full' },
  {path: 'add', component: AddGuildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
