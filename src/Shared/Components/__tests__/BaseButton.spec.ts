import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseButton from '../Button';

describe('BaseButton', () => {
  it('renders slot text when component is created', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Button',
      },
    });
    expect(wrapper.text()).toMatch('Button');
  });

  it('renders default text when component is created without specified slot text', () => {
    const wrapper = mount(BaseButton);
    expect(wrapper.text()).toMatch('Default button');
  });

  it('has correct attribute', () => {
    const wrapper = shallowMount(BaseButton);
    const button = wrapper.find('button');
    expect(button.attributes().type).toBe('button');
  });
});
