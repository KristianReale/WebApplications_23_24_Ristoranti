import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { RistoranteVetrinaComponent } from './ristorante-vetrina/ristorante-vetrina.component';
import { SezioneRistoranteVetrinaComponent } from './sezione-ristorante-vetrina/sezione-ristorante-vetrina.component';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ChiSiamoComponent,
    RistoranteVetrinaComponent,
    SezioneRistoranteVetrinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
