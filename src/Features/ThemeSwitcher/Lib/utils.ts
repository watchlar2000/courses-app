import { Theme } from './types';

export const setTheme = (theme: string): void => {
  localStorage.setItem(Theme.User, theme);
  document.documentElement.className = theme;
};

export const getTheme = (): string | null => {
  return localStorage.getItem(Theme.User);
};
