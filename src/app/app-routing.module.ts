import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { DokumentaFakturaComponent } from './dokumenta-faktura/dokumenta-faktura.component';


const routes: Routes = [
  { path: '', component: CitatiComponent },
  { path: 'Kalendar', component: KalendarComponent },
  { path: 'Rokovnik', component: RokovnikComponent },
  { path: 'Digitron', component: DigitronComponent },
  { path: 'Glavna-knjiga', component: GlavnaKnjigaComponent },
  { path: 'Nabavka', component: NabavkaComponent },
  { path: 'Analitika-racuna', component: AnalitikaRacunaComponent },
  { path: 'Dokumenta', component: DokumentaComponent },
  { path: 'Knjizenje-robe', component: KnjizenjeRobeComponent },
  { path: 'Kontakt', component: KontaktComponent },
  { path: 'Faktura', component: DokumentaFakturaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
