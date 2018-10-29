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
  sacuvaniBilans=this.prikaziSacuvaneBilansaOnReload();

  ngOnInit() {

  }
  sacuvajGlavnuKnjigu(event, bsp) {
    event.preventDefault();
    let glavnaKnjigakljuc = bsp.value;
    for (let index = 0; index <= 39; index++) {
        this.glavnaKnjigaNiz.push(event.target[index].value)
    }
    this.sacuvaniBilansi[glavnaKnjigakljuc]=this.glavnaKnjigaNiz;
    this.funkcijeSabloni.setToLocalStorage('glavnaKnjigaBilansStanja',this.sacuvaniBilansi)
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
    rezultatAktiva.innerHTML="";
    rezultatPasiva.innerHTML="";
  }
  prikazSacuvanihBilansaOnSubmit(){
    let nizKljucevaGlavnaKnjiga=Object.keys(this.sacuvaniBilansi)
    this.sacuvaniBilans=nizKljucevaGlavnaKnjiga
  }
  prikaziSacuvaneBilansaOnReload() {
    let nizKljucevaGlavnaKnjiga = Object.keys(this.sacuvaniBilansi)
    return nizKljucevaGlavnaKnjiga;
}
izbrisiBilans(event){
  event.preventDefault();
  if (this.funkcijeSabloni.potvrda()===false) {
    return;
  }else{
    delete this.sacuvaniBilansi[event.target.id]
    this.funkcijeSabloni.setToLocalStorage('glavnaKnjigaBilansStanja',this.sacuvaniBilansi)
    alert('Uspesno obrisano !')
    this.prikazSacuvanihBilansaOnSubmit();
  }
}
}

