import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import DefaultLayout from '../DefaultLayout.vue';

describe('DefaultLayout', () => {
  it('renders page layout', () => {
    const wrapper = mount(DefaultLayout);

    expect(wrapper.find('header').exists()).toBeTruthy();
    expect(wrapper.find('main').exists()).toBeTruthy();
    expect(wrapper.find('footer').exists()).toBeTruthy();
  });
});
