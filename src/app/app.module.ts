import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { KalendarComponent } from './kalendar/kalendar.component';
import { RokovnikComponent } from './rokovnik/rokovnik.component';
import { DigitronComponent } from './digitron/digitron.component';
import { GlavnaKnjigaComponent } from './glavna-knjiga/glavna-knjiga.component';
import { NabavkaComponent } from './nabavka/nabavka.component';
import { AnalitikaRacunaComponent } from './analitika-racuna/analitika-racuna.component';
import { DokumentaComponent } from './dokumenta/dokumenta.component';
import { KnjizenjeRobeComponent } from './knjizenje-robe/knjizenje-robe.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { CitatiComponent } from './citati/citati.component';
import { RegistracijaPrijavaComponent } from './registracija-prijava/registracija-prijava.component';
import { DokumentaFakturaComponent } from './dokumenta-faktura/dokumenta-faktura.component';

@NgModule({
  declarations: [
    AppComponent,
    KalendarComponent,
    RokovnikComponent,
    DigitronComponent,
    GlavnaKnjigaComponent,
    NabavkaComponent,
    AnalitikaRacunaComponent,
    DokumentaComponent,
    KnjizenjeRobeComponent,
    KontaktComponent,
    CitatiComponent,
    RegistracijaPrijavaComponent,
    DokumentaFakturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
