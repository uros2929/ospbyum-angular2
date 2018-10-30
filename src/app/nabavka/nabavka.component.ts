import { Component, OnInit } from '@angular/core';
import { FunkcijeSabloniService } from '../funkcije-sabloni.service';

@Component({
  selector: 'app-nabavka',
  templateUrl: './nabavka.component.html',
  styleUrls: ['./nabavka.component.css']
})
export class NabavkaComponent implements OnInit {

  constructor(private funkcijeSabloni:FunkcijeSabloniService) { }

  dobavljaciIzLokala=this.funkcijeSabloni.getFromLocalStorage("Dobavljaci")
  dobavljac=this.prikazSacuvaniDobavljaca();

  ngOnInit() {
  }
  
  sacuvajDobavljaca(event){
    event.preventDefault();
    let noviDobavljac=event.target[0].value;
    if (noviDobavljac==="") {
      alert('Upisi email dobavljaca !')
      return
    }else{
      this.dobavljaciIzLokala[noviDobavljac]=noviDobavljac;
      this.funkcijeSabloni.setToLocalStorage('Dobavljaci',this.dobavljaciIzLokala)
      alert('Uspesno sacuvano !');
      event.target.reset();
      this.prikazNovogDobavljacaOnSubmit();
    }
  }

prikazNovogDobavljacaOnSubmit(){
  let nizKljucevaDobavljaca=Object.keys(this.dobavljaciIzLokala);
  this.dobavljac=nizKljucevaDobavljaca;
}

prikazSacuvaniDobavljaca(){
  let nizKljucevaDobavljaca=Object.keys(this.dobavljaciIzLokala);
  return nizKljucevaDobavljaca;
}
izbrisiDobavljaca(event){
event.preventDefault();
if (this.funkcijeSabloni.potvrda()===false) {
  return;
}else{
  delete this.dobavljaciIzLokala[event.target.id];
  this.funkcijeSabloni.setToLocalStorage('Dobavljaci',this.dobavljaciIzLokala);
  alert('Uspesno izbrisan dobavljac !')
  this.prikazNovogDobavljacaOnSubmit();
}
}
pretrazi(dobavljacInput){
  let filter=dobavljacInput.value,
      ul = document.getElementById('nabavkaUl'),
      li=ul.getElementsByTagName('li');
   for (let index = 0; index < li.length; index++) {
     let a=li[index].getElementsByTagName('A')[0];
    if (a.innerHTML.indexOf(filter)>-1) {
      li[index].style.display=""
    }else{
      li[index].style.display="none"
    }
   
   }
}
}
