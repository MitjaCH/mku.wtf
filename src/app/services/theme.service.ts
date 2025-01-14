import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey = 'app-theme';

  constructor() {
    this.loadTheme();
  }

  setTheme(isDark: boolean): void {
    if (isDark) {
      localStorage.setItem(this.themeKey, 'dark');
    } else {
      localStorage.setItem(this.themeKey, 'light');
    }
    this.applyTheme();
  }

  loadTheme(): void {
    const userPreference = localStorage.getItem(this.themeKey);
    if (!userPreference) {
      this.applySystemPreference();
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    const currentPreference = localStorage.getItem(this.themeKey);
    const isDark = currentPreference === 'dark';
    this.setTheme(!isDark);
  }

  private applyTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey) || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  private applySystemPreference(): void {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(this.themeKey, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(this.themeKey, 'light');
    }
  }
}
