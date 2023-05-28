import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import ThemeSwitcher from '..';
import { THEME_ICONS, THEME_MODES, themeModes } from '../Lib/consts';

describe('ThemeSwitcher', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ThemeSwitcher);
  });

  afterEach(() => {
    wrapper.unmount();
    localStorage.clear();
  });

  it('renders properly', async () => {
    expect(wrapper.vm.userTheme).toBe(THEME_MODES.light);
    expect(wrapper.vm.displayIcon).toBe(THEME_ICONS.light);
    expect(wrapper.find('.icon').text()).toMatch(THEME_ICONS.light);
  });

  it('sets initial userTheme value to the first element of the provided theme array if there is no userTheme data in local storage', async () => {
    expect(wrapper.vm.userTheme).toBe(themeModes[0]);
  });

  it('has displayIcon computed function which works properly ', async () => {
    expect(wrapper.vm.displayIcon).toMatch(THEME_ICONS.light);
    wrapper.vm.userTheme = themeModes[1];
    expect(wrapper.vm.displayIcon).toMatch(THEME_ICONS.dark);
  });
});
