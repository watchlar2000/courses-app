import type { ThemesList } from './types';

export const getCurrentIcon = (
  themes: ThemesList[],
  currentThemeMode: string,
): string | undefined => {
  const themeData = themes.find((t) => t.mode === currentThemeMode);
  return themeData?.icon;
};
