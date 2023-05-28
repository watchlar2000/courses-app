import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseError from '../Error';

describe('BaseError', () => {
  it('renders slot text when component is created', () => {
    const wrapper = shallowMount(BaseError, {
      slots: {
        default: 'Bad request',
      },
    });
    expect(wrapper.text()).toMatch('Bad request');
  });

  it('renders default text when component is created without specified slot text', () => {
    const wrapper = shallowMount(BaseError);
    expect(wrapper.text()).toMatch('Something went wrong');
  });
});
