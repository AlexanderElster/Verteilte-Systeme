import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DozentenlisteComponent } from './verwaltung/dozentenliste/dozentenliste.component';
import { NeudozentComponent } from './verwaltung/neudozent/neudozent.component';
import { LoginComponent } from './einstieg/login/login.component';
import { KurslisteComponent } from './verwaltung/kursliste/kursliste.component';
import { NeukursComponent } from './verwaltung/neukurs/neukurs.component';
import { KalenderComponent } from './verwaltung/kalender/kalender.component';
import { VeranstaltungenlisteComponent } from './verwaltung/veranstaltungenliste/veranstaltungenliste.component';
import { NeuveranstaltungComponent } from './verwaltung/neuveranstaltung/neuveranstaltung.component';
import { NeuvorlesungsterminComponent } from './verwaltung/neuvorlesungstermin/neuvorlesungstermin.component';
import { TerminloeschenComponent } from './verwaltung/terminloeschen/terminloeschen.component';


const routes: Routes = [
  {path: 'dozentenliste', component: DozentenlisteComponent},
  {path: 'dozentenliste/neu', component: NeudozentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'kursliste', component: KurslisteComponent},
  {path: 'kursliste/neu', component: NeukursComponent},
  {path: 'kalender', component: KalenderComponent},
  {path: 'veranstaltungenliste', component: VeranstaltungenlisteComponent},
  {path: 'veranstaltungenliste/neu', component: NeuveranstaltungComponent},
  {path: 'vorlesungstermin/neu', component: NeuvorlesungsterminComponent},
  {path: 'vorlesungstermin/loeschen', component: TerminloeschenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
