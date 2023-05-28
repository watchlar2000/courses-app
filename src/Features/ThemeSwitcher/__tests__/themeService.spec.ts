import { afterEach, describe, expect, it } from 'vitest';
import { themeModes } from '../Lib/consts';
import { ThemeService } from '../Lib/themeService';

describe('themeService', () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute('data-theme', '');
  });

  it('has a get method which properly works and returns initial value', async () => {
    const mockThemeService = new ThemeService(themeModes);
    expect(mockThemeService.get()).toMatch(themeModes[0]);
  });

  it('has a set method which properly works', async () => {
    const mockThemeService = new ThemeService(themeModes);
    mockThemeService.set('dark');
    expect(mockThemeService.get()).toMatch('dark');
    expect(document.documentElement.dataset.theme).toMatch('dark');
    expect(localStorage.getItem('user-theme')).toMatch('dark');
  });

  it('has a next method which properly works and returns next theme value', async () => {
    const mockThemeService = new ThemeService(themeModes);
    mockThemeService.next();
    const numberOfThemes = themeModes.length;

    if (numberOfThemes >= 2) {
      expect(mockThemeService.get()).toMatch(themeModes[1]);
    } else {
      expect(mockThemeService.get()).toMatch(themeModes[0]);
    }
  });
});
