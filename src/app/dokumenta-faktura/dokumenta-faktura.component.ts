import { Component, OnInit } from '@angular/core';
import { FunkcijeSabloniService } from '../funkcije-sabloni.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-dokumenta-faktura',
  templateUrl: './dokumenta-faktura.component.html',
  styleUrls: ['./dokumenta-faktura.component.css']
})
export class DokumentaFakturaComponent implements OnInit {
  rows = [];
  broj = 1;
  brojID;
  fakturaObjekat = this.funkcijeSabloni.getFromLocalStorage('sacuvaneFakture');
  sacuvaneFakture=this.prikazSacuvanihFakturaOnreload();
  constructor(private funkcijeSabloni: FunkcijeSabloniService) { }



  ngOnInit() {

  }

  pravljenjeRedovaTabele(event, kolicina, opis, cenaPoJedinici, ukupno) {
    event.preventDefault();
    this.rows.push([kolicina.value, opis.value, cenaPoJedinici.value, ukupno.value])
    this.broj++
    if (this.broj === 26) {
      alert('Uneli ste maksimalan broj redova !')
    }
    event.target.parentElement.children[4].children[9].children[0].children[0].children[0].children[1].children[0].value="";
    event.target.parentElement.children[4].children[9].children[0].children[0].children[0].children[2].children[0].value=""
    event.target.parentElement.children[4].children[9].children[0].children[0].children[0].children[3].children[0].value=""
    event.target.parentElement.children[4].children[9].children[0].children[0].children[0].children[4].children[0].value=""
    //console.log(event.target.parentElement.children[4].children[9].children[0].children[0].children[0].children[1].children[0].value)
  }
  sacuvajFakturu(event) {
    event.preventDefault();
    let gornjaForma = event.target.nextElementSibling.children[5],
      donjaForma = event.target.nextElementSibling.children[11],
      tabela = this.rows;
      if (this.funkcijeSabloni.proveraDaLiPostojiUlogovaniKorisnik() === null) {
        alert('Uloguj se !');
        return;
      }
    if (gornjaForma[0].value==="") {
      alert('Broj fakture je obavezan !');
      return;
    }
    if (this.fakturaObjekat[gornjaForma[0].value] !== undefined) {
      alert('Faktura sa datim brojem vec postoji !')
      return;
    }
    let novaFaktura = {
      fakturaBrojN: gornjaForma[0].value,
      datumN: gornjaForma[1].value,
      imePreduzecaPosiljaocaN: gornjaForma[2].value,
      adresaPreduzecaN: gornjaForma[3].value,
      telefonN: gornjaForma[4].value,
      imePrimaocaN: gornjaForma[5].value,
      imePreduzecaPrimaocaN: gornjaForma[6].value,
      ulicaIBrojN: gornjaForma[7].value,
      gradDrzavaPPBN: gornjaForma[8].value,
      telefonPrimaocaN: gornjaForma[9].value,
      medjuvrednostiN: donjaForma[0].value,
      porezNaPrometN: donjaForma[1].value,
      ukupnoDugovanjeN: donjaForma[2].value,
      podatciIztabele:tabela
    }
  this.fakturaObjekat[gornjaForma[0].value]=novaFaktura;
  this.funkcijeSabloni.setToLocalStorage('sacuvaneFakture',this.fakturaObjekat);
  alert('Uspesno sacuvana faktura!');
  this.prikazSacuvanihFakturaOnSubmit();
  gornjaForma.reset();
  donjaForma.reset();
  this.rows=[];
  }
  resetujFakturu(event){
    event.preventDefault();
    let gornjaForma = event.target.parentElement.children[4].children[5],
    donjaForma = event.target.parentElement.children[4].children[11];
    gornjaForma.reset();
    donjaForma.reset();
    this.rows=[];

  }
  prikazSacuvanihFakturaOnSubmit(){
    let nizKljucevaFakture = Object.keys(this.fakturaObjekat);
    this.sacuvaneFakture=nizKljucevaFakture
  }
  prikazSacuvanihFakturaOnreload(){
    let nizKljucevaFakture = Object.keys(this.fakturaObjekat)
   return nizKljucevaFakture
  }
  izbrisiFakturu(event){
    event.preventDefault();
    let gornjaForma=event.target.offsetParent.nextElementSibling.children[4].children[5],
    donjaForma=event.target.offsetParent.nextElementSibling.children[4].children[11];
    if (this.funkcijeSabloni.proveraDaLiPostojiUlogovaniKorisnik() === null) {
      alert('Uloguj se !');
      return;
    }
    if (this.funkcijeSabloni.potvrda()===false) {
      return;
    }else{
    let kljucFakture=event.target.id;
    delete this.fakturaObjekat[kljucFakture];
    this.funkcijeSabloni.setToLocalStorage('sacuvaneFakture',this.fakturaObjekat);
    this.prikazSacuvanihFakturaOnSubmit();
    gornjaForma.reset();
    donjaForma.reset();
    this.rows=[];
    }
  }
  izmeniFakturu(event){
    event.preventDefault();
    let gornjaForma=event.target.offsetParent.nextElementSibling.children[4].children[5],
      donjaForma=event.target.offsetParent.nextElementSibling.children[4].children[11];
    this.rows=this.fakturaObjekat[event.target.id].podatciIztabele;
    gornjaForma[0].value=this.fakturaObjekat[event.target.id].fakturaBrojN;
    gornjaForma[1].value=this.fakturaObjekat[event.target.id].datumN;
    gornjaForma[2].value=this.fakturaObjekat[event.target.id].imePreduzecaPosiljaocaN;
    gornjaForma[3].value=this.fakturaObjekat[event.target.id].adresaPreduzecaN;
    gornjaForma[4].value=this.fakturaObjekat[event.target.id].telefonN;
    gornjaForma[5].value=this.fakturaObjekat[event.target.id].imePrimaocaN;
    gornjaForma[6].value=this.fakturaObjekat[event.target.id].imePreduzecaPosiljaocaN;
    gornjaForma[7].value=this.fakturaObjekat[event.target.id].ulicaIBrojN;
    gornjaForma[8].value=this.fakturaObjekat[event.target.id].gradDrzavaPPBN;
    gornjaForma[9].value=this.fakturaObjekat[event.target.id].telefonPrimaocaN;
    donjaForma[0].value=this.fakturaObjekat[event.target.id].medjuvrednostiN;
    donjaForma[1].value=this.fakturaObjekat[event.target.id].porezNaPrometN;
    donjaForma[2].value=this.fakturaObjekat[event.target.id].ukupnoDugovanjeN;  
  }
  izbrisiRedTabele(event){
  event.target.parentElement.innerHTML=""   /// delete in array !?!?!?!?!??! need to do :(  
  console.log(event.target.parentElement)
  console.log(this.rows[0])
  }

  
}
