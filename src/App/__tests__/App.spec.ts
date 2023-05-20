import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import App from '../App.vue';

describe('App', () => {
  it('renders the page', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['router-view'],
      },
    });

    expect(wrapper.getComponent({ name: 'default-layout' }).exists()).toBeTruthy();
  });
});
