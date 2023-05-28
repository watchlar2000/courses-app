import { describe, expect, it } from 'vitest';
import { THEMES_LIST, THEME_ICONS, THEME_MODES } from '../Lib/consts';
import { getCurrentIcon } from '../Lib/utils';

describe('Utils', () => {
  it('getCurrentIcon function returns an icon if found', () => {
    const theme = THEME_MODES.dark;
    const icon = THEME_ICONS.dark;
    expect(getCurrentIcon(THEMES_LIST, theme)).toMatch(icon);
  });

  it('getCurrentIcon function returns undifined if icon not found', () => {
    const theme = 'unknown';
    expect(getCurrentIcon(THEMES_LIST, theme)).toBeUndefined();
  });
});
