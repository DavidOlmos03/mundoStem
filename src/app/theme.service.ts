

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('light');
  public theme$ = this.themeSubject.asObservable();

  setTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    this.themeSubject.next(theme);
  }
}
