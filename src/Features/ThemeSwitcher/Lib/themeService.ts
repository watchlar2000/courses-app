import { THEME_LOCAL_STORAGE_KEY } from './consts';

interface ThemeServiceInterface {
  set(theme: string): void;
  get(): string;
  next(): void;
}

export class ThemeService implements ThemeServiceInterface {
  private userTheme: string;
  private themes: string[];

  constructor(themes: string[]) {
    this.userTheme = '';
    this.themes = themes;
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const storedTheme = this.getThemeFromLocalStorage();

    if (storedTheme) {
      this.set(storedTheme);
    } else {
      this.set(this.themes[0]);
    }
  }

  private getThemeFromLocalStorage(): string | null {
    const storedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
    return storedTheme ? storedTheme : null;
  }

  set(theme: string): void {
    this.userTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }

  get(): string {
    return this.userTheme;
  }

  next(): void {
    const activeThemeIndex = this.themes.findIndex((t) => t === this.userTheme);
    const isLastTheme = activeThemeIndex === this.themes.length - 1;
    let nextTheme = '';

    if (isLastTheme) {
      nextTheme = this.themes[0];
    } else {
      nextTheme = this.themes[activeThemeIndex + 1];
    }

    this.set(nextTheme);
  }
}
