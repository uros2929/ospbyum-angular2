import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalendar',
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.css']
})
export class KalendarComponent implements OnInit {

  kalendar = {
    meseci: []
  };
  brojDanaUMesecu;
 
  datum = new Date();
  prviDanUGodini = this.datum.getDay();
  constructor() { }

  ngOnInit() {
    this.ispisMeseca();
    this.ispisDanaUMesecu();
   this.dodajImeMeseca();
    console.log(this.kalendar.meseci[0].dani)
  }

  ispisMeseca() {

    for (let mesec = 1; mesec <= 12; mesec++) {
      let mesec = {
        dani: []
      }
      this.kalendar.meseci.push(mesec)
    }
    return this.kalendar
  }
  ispisDanaUMesecu() {
    if (this.kalendar.meseci[1]) {
      this.brojDanaUMesecu = 28
      for (let dan = 1; dan <= this.brojDanaUMesecu; dan++) {
        this.kalendar.meseci[1].dani.push(dan)

      }
    }
    if (this.kalendar.meseci[3] || this.kalendar.meseci[5] || this.kalendar.meseci[7] || this.kalendar.meseci[9]) {
      this.brojDanaUMesecu = 30
      for (let dan = 1; dan <= this.brojDanaUMesecu; dan++) {
        this.kalendar.meseci[3].dani.push(dan)
        this.kalendar.meseci[5].dani.push(dan)
        this.kalendar.meseci[8].dani.push(dan)
        this.kalendar.meseci[10].dani.push(dan)
      }

    }
    if (this.kalendar.meseci[0] || this.kalendar.meseci[2] || this.kalendar.meseci[4] || this.kalendar.meseci[6] || this.kalendar.meseci[8] || this.kalendar.meseci[10]) {
      this.brojDanaUMesecu = 31
      for (let dan = 1; dan <= this.brojDanaUMesecu; dan++) {
        this.kalendar.meseci[0].dani.push(dan)
        this.kalendar.meseci[2].dani.push(dan)
        this.kalendar.meseci[4].dani.push(dan)
        this.kalendar.meseci[6].dani.push(dan)
        this.kalendar.meseci[7].dani.push(dan)
        this.kalendar.meseci[9].dani.push(dan)
        this.kalendar.meseci[11].dani.push(dan)
      }
      return this.kalendar
    }
  }
  dodajImeMeseca(){
    this.kalendar.meseci[0].dani.unshift('januar')
    this.kalendar.meseci[1].dani.unshift('februar')
    this.kalendar.meseci[2].dani.unshift('mart')
    this.kalendar.meseci[3].dani.unshift('april')
    this.kalendar.meseci[4].dani.unshift('maj')
    this.kalendar.meseci[5].dani.unshift('jun')
    this.kalendar.meseci[6].dani.unshift('jul')
    this.kalendar.meseci[7].dani.unshift('avgust')
    this.kalendar.meseci[8].dani.unshift('septembar')
    this.kalendar.meseci[9].dani.unshift('oktobar')
    this.kalendar.meseci[10].dani.unshift('novembar')
    this.kalendar.meseci[11].dani.unshift('decembar')

  }
  onClick(event){
    console.log(event.target.parentElement.parentElement.attributes)
  }
}
