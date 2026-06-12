import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/Services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  selectedLang = 'en';
  currentLanguage!: string;
  currentFlag!: string;
  dropdownOpen = false;
  CaretDown = false;
  isNavbarCollapsed: boolean = true;
  isSidebarVisible: boolean = false;
  @ViewChild('dropdown') dropdownRef!: ElementRef;

  constructor(private translate: TranslateService, private languageService: LanguageService) { }

  ngOnInit() {
    if (this.languageService.getLanguage() == null || this.languageService.getLanguage() == undefined) {
      this.languageService.setLanguage("en", "assets/Images/Flag/en.png");
    }
    this.currentLanguage = this.languageService.getLanguage();
    this.currentFlag = this.languageService.getFlag();
    this.translate.use(this.currentLanguage);
    this.onResize()
  }

  // ********************************************************************** Switch Language **********************************************************************
  switchLanguage(language: string, flag: string, event: MouseEvent): void {
    event?.stopPropagation();
    this.translate.use(language);
    this.languageService.setLanguage(language, flag);
    this.currentFlag = this.languageService.getFlag();
    this.currentLanguage = this.languageService.getLanguage();
    this.dropdownOpen = false;
    console.log('switchLanguage ', this.currentLanguage)
    this.CaretDown = false;
  }

  // ********************************************************************** Open Dropdown **********************************************************************
  toggleDropdown(event: MouseEvent) {
    event?.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
    this.CaretDown = !this.CaretDown
    console.log('dropdownOpen ', this.dropdownOpen)
    console.log('lang ', this.currentLanguage)
  }

  // ********************************************************************** Close Dropdown **********************************************************************
  @HostListener('document:click')
  closeDropdown() {
    this.dropdownOpen = false;
    this.CaretDown = false;
  }

  // ********************************************************************** Check Screen Size **********************************************************************
  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    this.isNavbarCollapsed = window.innerWidth <= 900;
  }

  // ********************************************************************** toggle Sidebare **********************************************************************
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
