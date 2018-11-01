import { Component, OnInit } from '@angular/core';
import { FunkcijeSabloniService } from '../funkcije-sabloni.service';

@Component({
  selector: 'app-digitron',
  templateUrl: './digitron.component.html',
  styleUrls: ['./digitron.component.css']
})
export class DigitronComponent implements OnInit {

  constructor(private funkcijeSabloni:FunkcijeSabloniService) { }

  ngOnInit() {
  }

  clickNaDugme(event, inputZaBrojeve) {
    event.preventDefault();
    inputZaBrojeve.value += event.target.value;
  }

  racunanje(event, inputZaBrojeve) {
    event.preventDefault();
    if (this.funkcijeSabloni.proveraDaLiPostojiUlogovaniKorisnik()===null) {
      alert('Uloguj se !');
      return;
    }
    let novRezultat = "n/a";
    try {
      novRezultat = eval(inputZaBrojeve.value)
    } catch (error) {

    }
    if (novRezultat !== "n/a") {
      inputZaBrojeve.value = novRezultat;
    }
  }

  resetujInput(event, inputZaBrojeve) {
    event.preventDefault();
    inputZaBrojeve.value = "";
  }

}
