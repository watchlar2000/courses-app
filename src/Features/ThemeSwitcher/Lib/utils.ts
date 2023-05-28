import type { ThemesList } from './types';

export const getCurrentIcon = (
  themes: ThemesList[],
  currentThemeMode: string | null,
): string | undefined => {
  const themeData = themes.find((t) => t.mode === currentThemeMode);
  return themeData?.icon;
};
