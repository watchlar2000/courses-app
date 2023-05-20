import { mount } from '@vue/test-utils';
import { mockCourse } from '__mocks__/course';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import LessonsListItem from '../Ui/LessonsListItem';

const { lessons } = mockCourse;

describe('LessonsListItem', () => {
  let wrapper;

  const props = {
    error: 'test skill',
    lesson: lessons[0],
  };

  beforeEach(() => {
    wrapper = mount(LessonsListItem, {
      props,
      global: {
        stubs: ['router-link', 'font-awesome-icon'],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders properly', async () => {
    expect(wrapper.find('div').classes()).toContain('lesson');
    await wrapper.setProps({ lesson: { ...lessons[0], status: 'locked' } });
    expect(wrapper.find('div').classes('locked')).toBe(true);
  });

  it('has an isLessonLocked computed function which works properly', async () => {
    expect(wrapper.vm.isLessonLocked).toBe(false);
    await wrapper.setProps({ lesson: { ...lessons[0], status: 'locked' } });
    expect(wrapper.vm.isLessonLocked).toBe(true);
  });
});
