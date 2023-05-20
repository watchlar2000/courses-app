import { afterEach, describe, expect, it } from 'vitest';
import { getTheme, setTheme } from '../Lib';

describe('Utils', () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('setTheme sets the theme in local storage', () => {
    const theme = 'dark';
    setTheme(theme);
    expect(localStorage.getItem('user-theme')).toBe(theme);
  });

  it('setTheme sets the theme as the document class', () => {
    const theme = 'dark';
    setTheme(theme);
    expect(document.documentElement.className).toBe(theme);
  });

  it('getTheme returns the theme from local storage', () => {
    const theme = 'dark';
    localStorage.setItem('user-theme', theme);
    expect(getTheme()).toBe(theme);
  });

  it('getTheme returns null theme when local storage is empty', () => {
    expect(getTheme()).toBeNull();
  });
});
