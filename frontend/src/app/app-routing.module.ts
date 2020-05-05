import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DozentenlisteComponent } from './verwaltung/dozentenliste/dozentenliste.component';
import { NeudozentComponent } from './verwaltung/neudozent/neudozent.component';
import { LoginComponent } from './einstieg/login/login.component';
import { KurslisteComponent } from './verwaltung/kursliste/kursliste.component';
import { NeukursComponent } from './verwaltung/neukurs/neukurs.component';
import { KalenderComponent } from './verwaltung/kalender/kalender.component';

const routes: Routes = [
  {path: 'dozentenliste', component: DozentenlisteComponent},
  {path: 'dozentenliste/neu', component: NeudozentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'kursliste', component: KurslisteComponent},
  {path: 'kursliste/neu', component: NeukursComponent},
  {path: 'kalender', component: KalenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
