import { mount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import NotFoundView from '../NotFound';

describe('NotFound page', () => {
  it('displays corresponding text', () => {
    const wrapper = mount(NotFoundView, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    expect(wrapper.text()).toContain('404 | Page not found');
  });

  it('renders a go-back-home button', () => {
    const wrapper = mount(NotFoundView, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({ name: 'home' });
  });
});
