import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunkcijeSabloniService {
  
  constructor() { }

  setToLocalStorage(key, obj) {
   localStorage.setItem(key, JSON.stringify(obj));
  }
  getFromLocalStorage(key) {
    return localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key)) : {};
  }
  removeFromLocalStorage(key) {
    return localStorage.removeItem(key);
  }
  potvrda(){
    return confirm("Da li ste sigurni ?")
  }
  getElement(element){
  return document.getElementById(element)
  }
  
}
