import type { ThemesList } from './types';

export const THEME_LOCAL_STORAGE_KEY = 'user-theme';

export const THEME_ICONS = {
  dark: '🌙',
  light: '🔆',
};

export const THEME_MODES = {
  dark: 'dark',
  light: 'light',
};

export const THEMES_LIST: ThemesList[] = [
  {
    mode: THEME_MODES.light,
    icon: THEME_ICONS.light,
  },
  {
    mode: THEME_MODES.dark,
    icon: THEME_ICONS.dark,
  },
];

export const themeModes: string[] = THEMES_LIST.map((i) => i.mode);
