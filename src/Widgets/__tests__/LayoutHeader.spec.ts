import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LayoutHeader from '../LayoutHeader';
import HeaderLogo from '../LayoutHeader/Ui/Logo';

describe('LayoutHeader', () => {
  it('displays title when component is created', () => {
    const wrapper = mount(LayoutHeader, {
      props: { title: 'Courses App' },
    });
    const wrapperHeader = wrapper.getComponent(HeaderLogo);
    expect(wrapperHeader.exists()).toBe(true);
    expect(wrapperHeader.text()).toMatch('Courses App');
  });
});
