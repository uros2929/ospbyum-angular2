import { Component, OnInit } from '@angular/core';
import { FunkcijeSabloniService } from '../funkcije-sabloni.service';



@Component({
  selector: 'app-rokovnik',
  templateUrl: './rokovnik.component.html',
  styleUrls: ['./rokovnik.component.css']
})
export class RokovnikComponent implements OnInit {

  constructor(private funkcijeSabloni: FunkcijeSabloniService) { }

  rokovnikStavke = this.funkcijeSabloni.getFromLocalStorage('RokovnikStavke');
  rokovnikStavka = this.prikazSacuvanihStavki();

  ngOnInit() {

  }
  prikazStavkiOnSubmit() {
    let nizKljuceva = Object.keys(this.rokovnikStavke);
    this.rokovnikStavka = nizKljuceva;
  }
  prikazSacuvanihStavki() {
    let nizKljuceva = Object.keys(this.rokovnikStavke)
    return nizKljuceva

  }
  onSubmit(event) {
    event.preventDefault();
    let novaStavka = event.target[0].value;
    this.funkcijeSabloni.proveraDaLiPostojiUlogovaniKorisnik();
    if (this.funkcijeSabloni.proveraDaLiPostojiUlogovaniKorisnik() === null) {
      alert('Uloguj se !');
      return;
    }
    if (novaStavka === "") {
      alert('Upisi novu stavku')
      return;
    } else {
      this.rokovnikStavke[novaStavka] = novaStavka;
      this.funkcijeSabloni.setToLocalStorage("RokovnikStavke", this.rokovnikStavke);
      event.target.reset();
      this.prikazStavkiOnSubmit();
    }
  }
  izbrisiStavku(event) {
    event.preventDefault();
    if (this.funkcijeSabloni.proveraDaLiPostojiUlogovaniKorisnik() === null) {
      alert('Uloguj se !');
      return;
    }
    delete this.rokovnikStavke[event.target.id];
    this.funkcijeSabloni.setToLocalStorage("RokovnikStavke", this.rokovnikStavke);
    this.prikazStavkiOnSubmit();
  }
  izbrisiSveStavke(event) {
    event.preventDefault();
    if (this.funkcijeSabloni.potvrda() === false) {
      return;
    } else {
      this.funkcijeSabloni.removeFromLocalStorage('RokovnikStavke');
      alert('Uspesno ste obrisali stavke !');
      location.reload();
    }
  }
}
