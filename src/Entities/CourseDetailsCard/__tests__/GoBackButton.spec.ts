import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import GoBackButton from '../Ui/GoBackButton';

describe('GoBackButton', () => {
  it('renders properly', () => {
    const wrapper = mount(GoBackButton, {
      slots: {
        default: 'Click me to go back',
        icon: '<img src="icon" alt="icon" />',
      },
    });
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.text()).toMatch('Click me to go back');
  });

  it('renders default text when component is created without specified slots', () => {
    const wrapper = mount(GoBackButton);
    expect(wrapper.text()).toMatch('Back');
  });
});
