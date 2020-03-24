import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DozentenlisteComponent } from './verwaltung/dozentenliste/dozentenliste.component';
import { NeudozentComponent } from './verwaltung/neudozent/neudozent.component';
import { LoginComponent } from './einstieg/login/login.component';


const routes: Routes = [
  {path: 'dozentenliste', component: DozentenlisteComponent},
  {path: 'dozentenliste/neu', component: NeudozentComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
