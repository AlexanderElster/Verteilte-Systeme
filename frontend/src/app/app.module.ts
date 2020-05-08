import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './services/user-service.service';
import { LoginComponent } from './einstieg/login/login.component';
import { FormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { DozentenlisteComponent } from './verwaltung/dozentenliste/dozentenliste.component';
import { NeudozentComponent } from './verwaltung/neudozent/neudozent.component';
import { KurslisteComponent } from './verwaltung/kursliste/kursliste.component';
import { NeukursComponent } from './verwaltung/neukurs/neukurs.component';
import { KalenderComponent } from './verwaltung/kalender/kalender.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { VeranstaltungenlisteComponent } from './verwaltung/veranstaltungenliste/veranstaltungenliste.component';
import { NeuveranstaltungComponent } from './verwaltung/neuveranstaltung/neuveranstaltung.component';
import { NeuvorlesungsterminComponent } from './verwaltung/neuvorlesungstermin/neuvorlesungstermin.component';
import { TerminloeschenComponent } from './verwaltung/terminloeschen/terminloeschen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DozentenlisteComponent,
    NeudozentComponent,
    KurslisteComponent,
    NeukursComponent,
    KalenderComponent,
    NavbarComponent,
    VeranstaltungenlisteComponent,
    NeuveranstaltungComponent,
    NeuvorlesungsterminComponent,
    TerminloeschenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
