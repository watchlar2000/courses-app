import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CardHeader from '../CardHeader';

describe('CardHeader', () => {
  it('renders slot text when component is created', () => {
    const wrapper = shallowMount(CardHeader, {
      slots: {
        default: 'Test title',
      },
    });
    expect(wrapper.text()).toMatch('Test title');
  });
});
