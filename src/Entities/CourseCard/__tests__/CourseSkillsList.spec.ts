import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CourseSkillsList from '../Ui/CourseSkillsList';

describe('CourseSkillsList', () => {
  const slots = {
    default: `
      <li>Test skill 1</li>
      <li>Test skill 2</li>
    `,
  };

  it('renders a title', () => {
    const wrapper = shallowMount(CourseSkillsList);
    expect(wrapper.text()).toMatch('Skills:');
  });

  it('renders category when component is created', () => {
    const wrapper = shallowMount(CourseSkillsList, {
      slots,
    });

    const skillsList = wrapper.findAll('li');

    expect(skillsList).to.have.lengthOf(2);
    expect(skillsList[0].html()).toMatch('Test skill 1');
    expect(skillsList[1].html()).toMatch('Test skill 2');
  });
});
