import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateConfigService {
  constructor(private translateSrvc: TranslateService) {
    this.translateSrvc.use(localStorage.getItem('lang') || 'en');
  }

  changeLanguage = (lang: string) => {
    this.translateSrvc.use(lang);
    localStorage.setItem('lang', lang);
  };
}
