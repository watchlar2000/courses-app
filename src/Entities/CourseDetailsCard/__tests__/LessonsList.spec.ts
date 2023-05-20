import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LessonsList from '../Ui/LessonsList';

describe('LessonsList', () => {
  const slots = {
    default: `
      <p>Test lesson 1</p>
      <p>Test lesson 2</p>
    `,
  };

  it('renders lessons list when component is created', () => {
    const wrapper = shallowMount(LessonsList, {
      slots,
    });

    const skillsList = wrapper.findAll('p');

    expect(skillsList).to.have.lengthOf(2);
    expect(skillsList[0].html()).toMatch('Test lesson 1');
    expect(skillsList[1].html()).toMatch('Test lesson 2');
  });
});
