import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CourseCategory from '../Ui/CourseCategory';

describe('CourseCategory', () => {
  const slots = {
    default: `
      <p>Test category 1</p>
      <p>Test category 2</p>
    `,
  };

  it('renders category when component is created', () => {
    const wrapper = shallowMount(CourseCategory, {
      slots,
    });

    const skillsList = wrapper.findAll('p');

    expect(skillsList).to.have.lengthOf(2);
    expect(skillsList[0].html()).toMatch('Test category 1');
    expect(skillsList[1].html()).toMatch('Test category 2');
  });
});
