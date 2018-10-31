import { Component, OnInit } from '@angular/core';
import { FunkcijeSabloniService } from '../funkcije-sabloni.service';

@Component({
  selector: 'app-registracija-prijava',
  templateUrl: './registracija-prijava.component.html',
  styleUrls: ['./registracija-prijava.component.css']
})
export class RegistracijaPrijavaComponent implements OnInit {

 
  
  
  constructor(private funkcijeSabloni: FunkcijeSabloniService) { }
  registrovaniKorisniciNiz = [];
  ulogovaniKorisnik = this.funkcijeSabloni.getFromLocalStorage('Ulogovani korisnik');
  registrovaniKorisnici = this.funkcijeSabloni.getFromLocalStorage('registrovaniKorisnici');
  prikazPodatakaUlogovanogKorisnika=this.podatciUlogovanogKorisnika();
  prikazEmailaUlogovanogKorisnika=this.emailUlogovanogKorisnika();

  

  ngOnInit() {
    this.proveraUlogovanogKorisnika()
  }
  proveraUlogovanogKorisnika() {
    console.log(localStorage.getItem('Ulogovani korisnik'))
    if (localStorage.getItem('Ulogovani korisnik') !== "") {
      this.funkcijeSabloni.hide(this.funkcijeSabloni.getElement('prijavaRegistracija'));
      this.funkcijeSabloni.show(this.funkcijeSabloni.getElement('odjava'))
    }
  }
  otvoriFormuRegistracija() {
    this.funkcijeSabloni.show(this.funkcijeSabloni.getElement('registracija'))
  }
  zatvoriFormuRegistracija() {
    this.funkcijeSabloni.hide(this.funkcijeSabloni.getElement('registracija'))
  }
  registujKorisnika(event) {
    event.preventDefault();
    if (this.registrovaniKorisnici[event.target[3].value] !== undefined) {
      alert('Korisnik vec postoji !')
      return;
    }
    if (event.target[4].value !== event.target[5].value) {
      alert('potvrda sifre nije ispravna !')
      return;
    }
    let registracijaForma = this.funkcijeSabloni.getElement('registracija');
    for (let index = 0; index < 7; index++) {
      this.registrovaniKorisniciNiz.push(event.target[index].value);
    }
    this.registrovaniKorisnici[event.target[3].value] = this.registrovaniKorisniciNiz;
    this.funkcijeSabloni.setToLocalStorage('registrovaniKorisnici', this.registrovaniKorisnici);
    alert('Uspesno ste se registrovali !');
    this.funkcijeSabloni.hide(registracijaForma);
  }
  ulogujKorisnika(event) {
    event.preventDefault();
    let username = event.target[0].value,
      password = event.target[1].value;
    if (this.registrovaniKorisnici[username] === undefined) {
      alert('Pogresan username!')
      return;
    }
    if (password !== this.registrovaniKorisnici[username][4]) {
      alert('Pogresna sifra !')
      return;
    }
    this.funkcijeSabloni.setToLocalStorage('Ulogovani korisnik', username);
    alert('Uspesno ste se prijavili ! :)');
    this.funkcijeSabloni.hide(this.funkcijeSabloni.getElement('prijavaRegistracija'));
    this.funkcijeSabloni.show(this.funkcijeSabloni.getElement('odjava'))
  }

podatciUlogovanogKorisnika(){
   let ulogovaniKorisnik=JSON.parse(localStorage.getItem('Ulogovani korisnik'));
   if (ulogovaniKorisnik==="") {
     return;
   }else{
    let  imeUlogovanogKorisnika=this.registrovaniKorisnici[ulogovaniKorisnik][0],
    prezimeUlogovanogKorisnika=this.registrovaniKorisnici[ulogovaniKorisnik][1],
    podatciUHTML=imeUlogovanogKorisnika+" "+ prezimeUlogovanogKorisnika;
    return podatciUHTML;
   }
}
emailUlogovanogKorisnika(){
  let ulogovaniKorisnik=JSON.parse(localStorage.getItem('Ulogovani korisnik'));
  if (ulogovaniKorisnik==="") {
    return;
  }else{
    return ulogovaniKorisnik;
  }
}
odjavaKorisnika(event){
event.preventDefault();
this.funkcijeSabloni.setToLocalStorage('Ulogovani korisnik', "");
this.funkcijeSabloni.show(this.funkcijeSabloni.getElement('prijavaRegistracija'));
this.funkcijeSabloni.hide(this.funkcijeSabloni.getElement('odjava'))
}
}
