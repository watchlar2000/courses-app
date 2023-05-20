import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HeaderLogo from '../LayoutHeader/Ui/Logo';

describe('HeaderLogo', () => {
  it('renders slot content', () => {
    const wrapper = shallowMount(HeaderLogo, {
      slots: {
        default: '<img src="logo.jpg" alt="logo" />',
      },
    });

    expect(wrapper.find('img').html()).toBe('<img src="logo.jpg" alt="logo">');
  });
});
