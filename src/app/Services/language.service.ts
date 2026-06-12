import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage!: any;
  currentFlag!: any;

  setLanguage(language: string, flag: string) {
    window.localStorage.setItem("language", language);
    this.currentFlag = flag;
  }

  getLanguage(): any {
    return localStorage.getItem('language');
  }

  getFlag(): string {
    this.currentLanguage = localStorage.getItem('language');
    if (this.currentLanguage == "en") {
      this.currentFlag = "assets/Images/Flag/en.png";
    } else if (this.currentLanguage == "fr") {
      this.currentFlag = "assets/Images/Flag/fr.png";
    }
    return this.currentFlag;
  }
}
