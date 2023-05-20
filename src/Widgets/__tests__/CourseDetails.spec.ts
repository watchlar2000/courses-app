import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CourseDetails from '../CourseDetails';

describe('CourseDetails', () => {
  it('renders slot content', () => {
    const wrapper = shallowMount(CourseDetails, {
      slots: {
        default: '<p>Blah blah</p>',
      },
    });

    expect(wrapper.html()).toMatch('Blah blah');
    expect(wrapper.find('p').exists()).toBe(true);
  });
});
