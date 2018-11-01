import { Component, OnInit } from '@angular/core';
import { FunkcijeSabloniService } from '../funkcije-sabloni.service';

@Component({
  selector: 'app-knjizenje-robe',
  templateUrl: './knjizenje-robe.component.html',
  styleUrls: ['./knjizenje-robe.component.css']
})
export class KnjizenjeRobeComponent implements OnInit {

  sacuvanaRobaIzLocala = this.funkcijeSabloni.getFromLocalStorage("sacuvanaRoba")
  sacuvanaRobaNiz = [];
  sacuvanaRoba = this.prikazSacuvaneRobeOnReload();
  sifraProizvoda = null;
  nazivProizvoda = null;
  kolicinaProizvoda = null;
  opisProizvoda = null;
  constructor(private funkcijeSabloni: FunkcijeSabloniService) { }

  ngOnInit() {
  }

  sacuvajNoviProizvod(event) {
    event.preventDefault();
    let kljucSacuvaneRobe = event.target[0].value;
    if (this.funkcijeSabloni.proveraDaLiPostojiUlogovaniKorisnik()===null) {
      alert('Uloguj se !');
      return;
    }
    for (let index = 0; index < 4; index++) {
      this.sacuvanaRobaNiz.push(event.target[index].value)
    }
    if (this.sacuvanaRobaIzLocala[kljucSacuvaneRobe] !== undefined) {
      alert('Šifra proizvoda vec postoji !')
      let potvrda = confirm('Da li zelite za izmenite dati proizvod ?');
      if (potvrda === false) {
        return;
      }
    }
    this.sacuvanaRobaIzLocala[kljucSacuvaneRobe] = this.sacuvanaRobaNiz;
    this.funkcijeSabloni.setToLocalStorage('sacuvanaRoba', this.sacuvanaRobaIzLocala);
    alert('Uspesno sacuvan proizvod !')
    event.target.reset();
    this.prikazSacuvaneRobeOnSubmit();
  }

  prikazSacuvaneRobeOnSubmit() {
    let nizSacuvanihRoba = Object.keys(this.sacuvanaRobaIzLocala);
    this.sacuvanaRoba = nizSacuvanihRoba;
  }
  prikazSacuvaneRobeOnReload() {
    let nizSacuvanihRoba = Object.keys(this.sacuvanaRobaIzLocala);
    return nizSacuvanihRoba
  }
  prikaziProizvodIzmeniProizvod(event, sifraProizvodaInput, nazivProizvodaInput, kolicinaProizvodaInput, opisProizvodInput) {
    event.preventDefault()
    let kliknutiProizvodNiz = this.sacuvanaRobaIzLocala[event.target.id];
    if (event.target.tagName === "P") {
      this.sifraProizvoda = kliknutiProizvodNiz[0];
      this.nazivProizvoda = kliknutiProizvodNiz[1];
      this.kolicinaProizvoda = kliknutiProizvodNiz[2];
      this.opisProizvoda = kliknutiProizvodNiz[3];
    } else if (event.target.textContent === "izmeni") {
      sifraProizvodaInput.value = kliknutiProizvodNiz[0];
      nazivProizvodaInput.value = kliknutiProizvodNiz[1];
      kolicinaProizvodaInput.value = kliknutiProizvodNiz[2];
      opisProizvodInput.value = kliknutiProizvodNiz[3]
      console.log(event.target)
    }
  }
  izbrisiProizvod(event) {
    event.preventDefault();
    if (this.funkcijeSabloni.proveraDaLiPostojiUlogovaniKorisnik()===null) {
      alert('Uloguj se !');
      return;
    }
    if (this.funkcijeSabloni.potvrda() === false) {
      return;
    } else {
      delete this.sacuvanaRobaIzLocala[event.target.id];
      this.funkcijeSabloni.setToLocalStorage('sacuvanaRoba', this.sacuvanaRobaIzLocala);
      alert('Uspesno izbrisano !')
      this.prikazSacuvaneRobeOnSubmit();
    }
  }
  pretrazi(robaInput) {
    let filter=robaInput.value,
        ul = document.getElementById('robaUl'),
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
