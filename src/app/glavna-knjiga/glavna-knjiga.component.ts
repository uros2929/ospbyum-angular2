import { Component, OnInit } from '@angular/core';
import { FunkcijeSabloniService } from '../funkcije-sabloni.service';




@Component({
  selector: 'app-glavna-knjiga',
  templateUrl: './glavna-knjiga.component.html',
  styleUrls: ['./glavna-knjiga.component.css']
})
export class GlavnaKnjigaComponent implements OnInit {

  glavnaKnjigaNiz = [];

  constructor(private funkcijeSabloni: FunkcijeSabloniService) { }

  sacuvaniBilansi = this.funkcijeSabloni.getFromLocalStorage('glavnaKnjigaBilansStanja');
  sacuvaniBilans = this.prikaziSacuvaneBilansaOnReload();

  ngOnInit() {

  }
  sacuvajGlavnuKnjigu(event, bsp) {
    event.preventDefault();
    let glavnaKnjigakljuc = bsp.value;
    if (glavnaKnjigakljuc==="") {
      alert('Datum je obavezan !');
      return;
    }
    for (let index = 0; index <= 39; index++) {
      this.glavnaKnjigaNiz.push(event.target[index].value)
    }
    this.sacuvaniBilansi[glavnaKnjigakljuc] = this.glavnaKnjigaNiz;
    this.funkcijeSabloni.setToLocalStorage('glavnaKnjigaBilansStanja', this.sacuvaniBilansi)
    alert('Uspesno sacuvano!');
    event.target.reset();
    bsp.value = "";
    this.prikazSacuvanihBilansaOnSubmit()
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
  resetForme(bsp) {
    let rezultatAktiva = document.getElementById('rezultatAktiva'),
      rezultatPasiva = document.getElementById('rezultatPasiva');
    bsp.value = "";
    rezultatAktiva.innerHTML = "";
    rezultatPasiva.innerHTML = "";
  }
  prikazSacuvanihBilansaOnSubmit() {
    let nizKljucevaGlavnaKnjiga = Object.keys(this.sacuvaniBilansi)
    this.sacuvaniBilans = nizKljucevaGlavnaKnjiga
  }
  prikaziSacuvaneBilansaOnReload() {
    let nizKljucevaGlavnaKnjiga = Object.keys(this.sacuvaniBilansi)
    return nizKljucevaGlavnaKnjiga;
  }
  izbrisiBilans(event) {
    event.preventDefault();
    if (this.funkcijeSabloni.potvrda() === false) {
      return;
    } else {
      delete this.sacuvaniBilansi[event.target.id]
      this.funkcijeSabloni.setToLocalStorage('glavnaKnjigaBilansStanja', this.sacuvaniBilansi)
      alert('Uspesno obrisano !')
      this.prikazSacuvanihBilansaOnSubmit();
    }
  }
  prikaziDatuGlavnuKnjigu(event, bsp, textA1, textA2, textA3, textA4, textA5, textA6, textA7, textA8, textA9, textA10, textP1, textP2, textP3, textP4, textP5, textP6, textP7, textP8, textP9, textP10, brA1, brA2, brA3, brA4, brA5, brA6, brA7, brA8, brA9, brA10, brP1, brP2, brP3, brP4, brP5, brP6, brP7, brP8, brP9, brP10) {
    event.preventDefault();
    let kliknutBilansStanja = this.sacuvaniBilansi[event.target.id];
    bsp.value = event.target.id;
    textA1.value = kliknutBilansStanja[0];brA1.value = kliknutBilansStanja[1];textA2.value = kliknutBilansStanja[2];brA2.value = kliknutBilansStanja[3];textA3.value = kliknutBilansStanja[4];brA3.value = kliknutBilansStanja[5];
    textA4.value = kliknutBilansStanja[6];brA4.value = kliknutBilansStanja[7];textA5.value = kliknutBilansStanja[8];brA5.value = kliknutBilansStanja[9];textA6.value = kliknutBilansStanja[10];brA6.value = kliknutBilansStanja[11];
    textA7.value = kliknutBilansStanja[12];brA7.value = kliknutBilansStanja[13];textA8.value = kliknutBilansStanja[14];brA8.value = kliknutBilansStanja[15];textA9.value = kliknutBilansStanja[16];brA9.value = kliknutBilansStanja[17];
    textA10.value = kliknutBilansStanja[18];brA10.value = kliknutBilansStanja[19];textP1.value = kliknutBilansStanja[20];brP1.value = kliknutBilansStanja[21];textP2.value = kliknutBilansStanja[22];brP2.value = kliknutBilansStanja[23];
    textP3.value = kliknutBilansStanja[24];brP3.value = kliknutBilansStanja[25];textP4.value = kliknutBilansStanja[26];brP4.value = kliknutBilansStanja[27];textP5.value = kliknutBilansStanja[28];brP5.value = kliknutBilansStanja[29];
    textP6.value = kliknutBilansStanja[30];brP6.value = kliknutBilansStanja[31];textP7.value = kliknutBilansStanja[32];brP7.value = kliknutBilansStanja[33];textP8.value = kliknutBilansStanja[34];brP8.value = kliknutBilansStanja[35];
    textP9.value = kliknutBilansStanja[36];brP9.value = kliknutBilansStanja[37];textP10.value = kliknutBilansStanja[38];brP10.value = kliknutBilansStanja[39];
    this.racunanjeAktiveiPasive(brA1, brA2, brA3, brA4, brA5, brA6, brA7, brA8, brA9, brA10, brP1, brP2, brP3, brP4, brP5, brP6, brP7, brP8, brP9, brP10);
  }
  pretrazi(bilansInput){
    let filter=bilansInput.value,
        ul = document.getElementById('bilansUl'),
        li=ul.getElementsByTagName('li');
     for (let index = 0; index < li.length; index++) {
       let p=li[index].getElementsByTagName('P')[0];
      if (p.innerHTML.indexOf(filter)>-1) {
        li[index].style.display=""
      }else{
        li[index].style.display="none"
      }
     
     }
  }
}

