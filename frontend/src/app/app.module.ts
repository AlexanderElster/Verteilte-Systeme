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
import { UpdatedozentComponent } from './verwaltung/updatedozent/updatedozent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DozentenlisteComponent,
    NeudozentComponent,
    UpdatedozentComponent
    
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
