import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ThemeSwitcher from '..';
import { Theme, ThemeIcon } from '../Lib/types';

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
    expect(wrapper.vm.userTheme).toBe(Theme.Light);
    expect(wrapper.vm.icon).toBe(ThemeIcon.Light);
    expect(wrapper.find('.icon').text()).toMatch(ThemeIcon.Light);
  });

  it('sets initial userTheme value to light-theme if there is no userTheme data in local storage', async () => {
    expect(wrapper.vm.userTheme).toBe(Theme.Light);
  });

  it('has icon computed function which works properly ', async () => {
    expect(wrapper.vm.icon).toBe(ThemeIcon.Light);

    await wrapper.find('.icon').trigger('click');

    expect(wrapper.vm.icon).toBe(ThemeIcon.Dark);
  });

  it('has toggleTheme function which works properly ', async () => {
    const toggleSpy = vi.spyOn(wrapper.vm, 'toggleTheme');

    expect(wrapper.vm.userTheme).toBe(Theme.Light);

    await wrapper.vm.toggleTheme();

    expect(toggleSpy).toHaveBeenCalled();

    expect(wrapper.vm.icon).toBe(ThemeIcon.Dark);
  });
});
