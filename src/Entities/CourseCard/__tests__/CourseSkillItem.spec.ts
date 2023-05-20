import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import CourseSkillItem from '../Ui/CourseSkillItem';

describe('CourseSkillItem', () => {
  let wrapper;

  const props = {
    skill: 'test skill',
  };

  const slots = {
    icon: '<img src="icon.png" alt="some icon">',
  };

  beforeEach(() => {
    wrapper = mount(CourseSkillItem, {
      props,
      slots,
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has a working capitalizedSkill computed function', () => {
    expect(wrapper.vm.capitalizedSkill).toMatch('Test skill');
  });

  it('renders skill when component is created', () => {
    expect(wrapper.text()).toContain('Test skill');
    expect(wrapper.find('span').exists()).toBe(true);
  });

  it('renders slot content', () => {
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
