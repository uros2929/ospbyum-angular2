import { Injectable } from '@angular/core';
import { element } from '@angular/core/src/render3';

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
  
}
