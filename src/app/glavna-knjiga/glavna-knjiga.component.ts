import { Component, OnInit } from '@angular/core';
import { FunkcijeSabloniService } from '../funkcije-sabloni.service';


@Component({
  selector: 'app-glavna-knjiga',
  templateUrl: './glavna-knjiga.component.html',
  styleUrls: ['./glavna-knjiga.component.css']
})
export class GlavnaKnjigaComponent implements OnInit {



  constructor(private funkcijeSabloni: FunkcijeSabloniService) { }

  sacuvaniBilansi=this.funkcijeSabloni.getFromLocalStorage('glavnaKnjigaBilansStanja');
  sacuvaniBilans=this.prikazSacuvanihBilansaStanja();

  ngOnInit() {
    this.prikazSacuvanihBilansaStanja();
  }

  racunanjeAktiveiPasive(brA1, brA2, brA3, brA4, brA5, brA6, brA7, brA8, brA9, brA10, brP1, brP2, brP3, brP4, brP5, brP6, brP7, brP8, brP9, brP10) {
    let rezultatAktiva = document.getElementById('rezultatAktiva'),
      rezultatPasiva = document.getElementById('rezultatPasiva'),
      sabiranjeAktive = JSON.parse(brA1.value) + JSON.parse(brA2.value) + JSON.parse(brA3.value) + JSON.parse(brA4.value) + JSON.parse(brA5.value) + JSON.parse(brA6.value) + JSON.parse(brA7.value) + JSON.parse(brA8.value) + JSON.parse(brA9.value) + JSON.parse(brA10.value),
      sabiranjePasive = JSON.parse(brP1.value) + JSON.parse(brP2.value) + JSON.parse(brP3.value) + JSON.parse(brP4.value) + JSON.parse(brP5.value) + JSON.parse(brP6.value) + JSON.parse(brP7.value) + JSON.parse(brP8.value) + JSON.parse(brP9.value) + JSON.parse(brP10.value);

    rezultatAktiva.innerHTML = "=" + " " + sabiranjeAktive;
    rezultatPasiva.innerHTML = "=" + " " + sabiranjePasive;

    if (sabiranjeAktive != sabiranjePasive) {
      rezultatAktiva.style.color = "red";
      rezultatPasiva.style.color = "red";
    } else {
      rezultatAktiva.style.color = "green";
      rezultatPasiva.style.color = "green";
    }
  }

  sacuvajGlavnuKnjigu(bsp, brA1, brA2, brA3, brA4, brA5, brA6, brA7, brA8, brA9, brA10, brP1, brP2, brP3, brP4, brP5, brP6, brP7, brP8, brP9, brP10, textA1, textA2, textA3, textA4, textA5, textA6, textA7, textA8, textA9, textA10, textP1, textP2, textP3, textP4, textP5, textP6, textP7, textP8, textP9, textP10) {
    let glavnaKnjigaBilansStanja = localStorage.getItem("glavnaKnjigaBilansStanja") !== null ? JSON.parse(localStorage.getItem("glavnaKnjigaBilansStanja")) : {};
    if(bsp.value===""){
      alert('Datum za bilans stanja je obavezan !')
      return;
    }
    if (glavnaKnjigaBilansStanja[bsp.value] !== undefined) {
      alert("Već postoji bilans za dati datum !")
      let potvrda = confirm("Ako želite da sačuvate nov bilans za dati datum potvrdite !")
      if (potvrda == false) {
        return;
      }
    
    }
    let noviBilansStanja = {
      nazivAktiva1: textA1.value,
      brojAktiva1: brA1.value,
      nazivAktiva2: textA2.value,
      brojAktiva2: brA2.value,
      nazivAktiva3: textA3.value,
      brojAktiva3: brA3.value,
      nazivAktiva4: textA4.value,
      brojAktiva4: brA4.value,
      nazivAktiva5: textA5.value,
      brojAktiva5: brA5.value,
      nazivAktiva6: textA6.value,
      brojAktiva6: brA6.value,
      nazivAktiva7: textA7.value,
      brojAktiva7: brA7.value,
      nazivAktiva8: textA8.value,
      brojAktiva8: brA8.value,
      nazivAktiva9: textA9.value,
      brojAktiva9: brA9.value,
      nazivAktiva10: textA10.value,
      brojAktiva10: brA10.value,
      nazivPasiva1: textP1.value,
      brojPasiva1: brP1.value,
      nazivPasiva2: textP2.value,
      brojPasiva2: brP3.value,
      nazivPasiva3: textP3.value,
      brojPasiva3: brP3.value,
      nazivPasiva4: textP4.value,
      brojPasiva4: brP4.value,
      nazivPasiva5: textP5.value,
      brojPasiva5: brP5.value,
      nazivPasiva6: textP6.value,
      brojPasiva6: brP6.value,
      nazivPasiva7: textP7.value,
      brojPasiva7: brP7.value,
      nazivPasiva8: textP8.value,
      brojPasiva8: brP8.value,
      nazivPasiva9: textP9.value,
      brojPasiva9: brP9.value,
      nazivPasiva10: textP10.value,
      brojPasiva10: brP10.value
    }
    glavnaKnjigaBilansStanja[bsp.value] = noviBilansStanja;
    this.funkcijeSabloni.setToLocalStorage('glavnaKnjigaBilansStanja', glavnaKnjigaBilansStanja);
    alert('Uspešno ste sačuvali Bilans Stanja');
    this.resetForms(bsp, event, brA1, brA2, brA3, brA4, brA5, brA6, brA7, brA8, brA9, brA10, brP1, brP2, brP3, brP4, brP5, brP6, brP7, brP8, brP9, brP10, textA1, textA2, textA3, textA4, textA5, textA6, textA7, textA8, textA9, textA10, textP1, textP2, textP3, textP4, textP5, textP6, textP7, textP8, textP9, textP10);
  }

  resetForms(bsp, event, brA1, brA2, brA3, brA4, brA5, brA6, brA7, brA8, brA9, brA10, brP1, brP2, brP3, brP4, brP5, brP6, brP7, brP8, brP9, brP10, textA1, textA2, textA3, textA4, textA5, textA6, textA7, textA8, textA9, textA10, textP1, textP2, textP3, textP4, textP5, textP6, textP7, textP8, textP9, textP10) {
    event.preventDefault();
    bsp.value = "";
    brA1.value = "0"; brA2.value = "0"; brA3.value = "0"; brA4.value = "0"; brA5.value = "0"; brA6.value = "0"; brA7.value = "0"; brA8.value = "0"; brA9.value = "0"; brA10.value = "0";
    brP1.value = "0"; brP2.value = "0"; brP3.value = "0"; brP4.value = "0"; brP5.value = "0"; brP6.value = "0"; brP7.value = "0"; brP8.value = "0"; brP9.value = "0"; brP10.value = "0";
    textA1.value = ""; textA2.value = ""; textA3.value = ""; textA4.value = ""; textA5.value = ""; textA6.value = ""; textA7.value = ""; textA8.value = ""; textA9.value = ""; textA10.value = "";
    textP1.value = ""; textP2.value = ""; textP3.value = ""; textP4.value = ""; textP5.value = ""; textP6.value = ""; textP7.value = ""; textP8.value = ""; textP9.value = ""; textP10.value = "";
    this.racunanjeAktiveiPasive(brA1, brA2, brA3, brA4, brA5, brA6, brA7, brA8, brA9, brA10, brP1, brP2, brP3, brP4, brP5, brP6, brP7, brP8, brP9, brP10);

  }

  prikazSacuvanihBilansaStanja(){
  let nizBilansaStanja=Object.keys(this.sacuvaniBilansi);
  return nizBilansaStanja
  }

  prikazPodatakaIzSacuvanihBilansa(event,bsp, brA1, brA2, brA3, brA4, brA5, brA6, brA7, brA8, brA9, brA10, brP1, brP2, brP3, brP4, brP5, brP6, brP7, brP8, brP9, brP10, textA1, textA2, textA3, textA4, textA5, textA6, textA7, textA8, textA9, textA10, textP1, textP2, textP3, textP4, textP5, textP6, textP7, textP8, textP9, textP10){
  event.preventDefault();
  let izvucenoIzLocala=this.sacuvaniBilansi[event.target.id];

  bsp.value=event.target.id;

  brA1.value=izvucenoIzLocala.brojAktiva1;brA2.value=izvucenoIzLocala.brojAktiva2;brA3.value=izvucenoIzLocala.brojAktiva3;brA4.value=izvucenoIzLocala.brojAktiva4;brA5.value=izvucenoIzLocala.brojAktiva5;
  brA6.value=izvucenoIzLocala.brojAktiva6;brA7.value=izvucenoIzLocala.brojAktiva7;brA8.value=izvucenoIzLocala.brojAktiva8;brA9.value=izvucenoIzLocala.brojAktiva9;brA10.value=izvucenoIzLocala.brojAktiva10;

  brP1.value=izvucenoIzLocala.brojPasiva1;brP2.value=izvucenoIzLocala.brojPasiva2;brP3.value=izvucenoIzLocala.brojPasiva3;brP4.value=izvucenoIzLocala.brojPasiva4;brP5.value=izvucenoIzLocala.brojPasiva5;
  brP6.value=izvucenoIzLocala.brojPasiva6;brP7.value=izvucenoIzLocala.brojPasiva7;brP8.value=izvucenoIzLocala.brojPasiva8;brP9.value=izvucenoIzLocala.brojPasiva9;brP10.value=izvucenoIzLocala.brojPasiva10;

  textA1.value=izvucenoIzLocala.nazivAktiva1;textA2.value=izvucenoIzLocala.nazivAktiva2;textA3.value=izvucenoIzLocala.nazivAktiva3;textA4.value=izvucenoIzLocala.nazivAktiva4;textA5.value=izvucenoIzLocala.nazivAktiva5;
  textA6.value=izvucenoIzLocala.nazivAktiva6;textA7.value=izvucenoIzLocala.nazivAktiva7;textA8.value=izvucenoIzLocala.nazivAktiva8;textA9.value=izvucenoIzLocala.nazivAktiva9;textA10.value=izvucenoIzLocala.nazivAktiva10;

  textP1.value=izvucenoIzLocala.nazivPasiva1;textP2.value=izvucenoIzLocala.nazivPasiva2;textP3.value=izvucenoIzLocala.nazivPasiva3;textP4.value=izvucenoIzLocala.nazivPasiva4;textP5.value=izvucenoIzLocala.nazivPasiva5;
  textP6.value=izvucenoIzLocala.nazivPasiva6;textP7.value=izvucenoIzLocala.nazivPasiva7;textP8.value=izvucenoIzLocala.nazivPasiva8;textP9.value=izvucenoIzLocala.nazivPasiva9;textP10.value=izvucenoIzLocala.nazivPasiva10;
  
  }
}
