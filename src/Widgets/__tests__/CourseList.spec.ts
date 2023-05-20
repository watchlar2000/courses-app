import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CourseList from '../CourseList';

describe('CourseList', () => {
  it('renders slot content', () => {
    const wrapper = shallowMount(CourseList, {
      slots: {
        default: '<div>Test 1</div>',
      },
    });

    expect(wrapper.html()).toMatch('Test 1');
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
