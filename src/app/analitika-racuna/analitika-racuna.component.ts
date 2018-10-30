import { Component, OnInit } from '@angular/core';
import { FunkcijeSabloniService } from '../funkcije-sabloni.service';

@Component({
  selector: 'app-analitika-racuna',
  templateUrl: './analitika-racuna.component.html',
  styleUrls: ['./analitika-racuna.component.css']
})
export class AnalitikaRacunaComponent implements OnInit {

  constructor(private funkcijeSabloni: FunkcijeSabloniService) { }

  analitikaRacunaLocal = this.funkcijeSabloni.getFromLocalStorage('analitikaRacuna');
  analitikaRacuna = this.prikaziSacuvaneAnalitikeOnReload();

  ngOnInit() {

  }

  sacuvajAnalitikuRacuna(event) {
    event.preventDefault();
    let datumV = event.target[0].value,
      nazivStrankeV = event.target[1].value,
      dugujeV = event.target[2].value,
      potrazujeV = event.target[3].value;
    let novaAnlitika = {
      datum: datumV,
      nazivStranke: nazivStrankeV,
      potrazuje: potrazujeV,
      duguje: dugujeV
    }
    if (datumV === "" || nazivStrankeV === "") {
      alert("Datum i naziv stranke su obavezni !")
      return;
    } else {
      this.analitikaRacunaLocal[datumV + "/" + nazivStrankeV] = novaAnlitika;
      this.funkcijeSabloni.setToLocalStorage('analitikaRacuna', this.analitikaRacunaLocal);
      alert('Uspesno sacuvano !');
      event.target.reset();
      this.prikaziSacuvaneAnalitikeOnSubmit();
    }
  }
  prikaziSacuvaneAnalitikeOnSubmit() {
    let nizKljucevaAnalitike = Object.keys(this.analitikaRacunaLocal)
    this.analitikaRacuna = nizKljucevaAnalitike;
  }
  prikaziSacuvaneAnalitikeOnReload() {
    let nizKljucevaAnalitike = Object.keys(this.analitikaRacunaLocal)
    return nizKljucevaAnalitike;
  }
  prikaziSacuvanuAnalitiku(event) {
    let kljucSacuvaneAnalitike = event.target.id,
      izvucenDatum = this.funkcijeSabloni.getElement('izvucenDatum'),
      izvucenNazivStranke = this.funkcijeSabloni.getElement('izvucenNazivStranke'),
      izvucenDuguje = this.funkcijeSabloni.getElement('izvucenDuguje'),
      izvucenPotrazuje = this.funkcijeSabloni.getElement('izvucenPotrazuje'),
      kolicinaDuguje = this.funkcijeSabloni.getElement('kolicinaDuguje'),
      kolicinaPotrazuje = this.funkcijeSabloni.getElement('kolicinaPotrazuje');
    izvucenDatum.innerHTML = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].datum;
    izvucenNazivStranke.innerHTML = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].nazivStranke;
    izvucenDuguje.innerHTML = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje;
    izvucenPotrazuje.innerHTML = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje;
    kolicinaDuguje.innerHTML = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje;
    kolicinaPotrazuje.innerHTML = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje;
    this.grafickiPrikaz(event);
  }

  grafickiPrikaz(event) {
    let grafickiDugovanje = this.funkcijeSabloni.getElement('grafickiDugovanje'),
      grafickiPotrazivanje = this.funkcijeSabloni.getElement('grafickiPotrazivanje'),
      kljucSacuvaneAnalitike = event.target.id;
    if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 350 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 350) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 700 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 700) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 2 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 2 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 1400 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 1400) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 4 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 4 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 2800 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 2800) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 8 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 8 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 5600 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 5600) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 16 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 16 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 11200 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 11200) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 32 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 32 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 22400 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 22400) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 64 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 64 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 44800 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 44800) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 128 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 128 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 89600 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 89600) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 256 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 256 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 179200 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 179200) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 512 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 512 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 358400 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 358400) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 1024 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 1024 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 716800 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 716800) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 2028 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 2028 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 1433600 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 1433600) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 4056 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 4056 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 2867200 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 2867200) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 8112 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 8112 + "px"
    } else if (this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje <= 5734400 && this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje <= 5734400) {
      grafickiDugovanje.style.display = "block"; grafickiDugovanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].duguje / 16224 + "px";
      grafickiPotrazivanje.style.display = "block"; grafickiPotrazivanje.style.height = this.analitikaRacunaLocal[kljucSacuvaneAnalitike].potrazuje / 16224 + "px"
    }


  }
  izbrisiSacuvanuAnalitiku(event) {
    if (this.funkcijeSabloni.potvrda() === false) {
      return;
    } else {
      delete this.analitikaRacunaLocal[event.target.id]
      this.funkcijeSabloni.setToLocalStorage("analitikaRacuna", this.analitikaRacunaLocal)
      alert('Uspesno izbrisano');
      this.prikaziSacuvaneAnalitikeOnSubmit();
    }
  }
  pretrazi(analitikaInput) {
    let filter = analitikaInput.value,
      ul = document.getElementById('analitikaUl'),
      li = ul.getElementsByTagName('li');
    for (let index = 0; index < li.length; index++) {
      let p = li[index].getElementsByTagName('P')[0];
      if (p.innerHTML.indexOf(filter) > -1) {
        li[index].style.display = ""
      } else {
        li[index].style.display = "none"
      }

    }
  }
}
