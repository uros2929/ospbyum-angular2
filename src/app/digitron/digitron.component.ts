import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitron',
  templateUrl: './digitron.component.html',
  styleUrls: ['./digitron.component.css']
})
export class DigitronComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickNaDugme(event, inputZaBrojeve) {
    event.preventDefault();
    inputZaBrojeve.value += event.target.value;
  }

  racunanje(event, inputZaBrojeve) {
    event.preventDefault();
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
