import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'app-theme';

  constructor() { }

  setTheme(isDarkTheme: boolean): void {
    if (isDarkTheme) {
      document.body.classList.add('dark');
      localStorage.setItem(this.themeKey, 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem(this.themeKey, 'light');
    }
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey) || 'light';
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }

  toggleTheme(): void {
    const isDarkTheme = document.body.classList.contains('dark');
    this.setTheme(!isDarkTheme);
  }
}