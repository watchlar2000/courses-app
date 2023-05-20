import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LessonTitle from '../Ui/LessonsListItem/Ui/LessonTitle';

describe('LessonTitle', () => {
  const props = {
    title: 'Hello world',
    order: 2,
    isLocked: false,
  };

  it('renders properly', async () => {
    const wrapper = mount(LessonTitle, {
      props,
      global: {
        stubs: ['font-awesome-icon'],
      },
    });

    expect(wrapper.find('[icon="lock"]').exists()).toBe(false);
    expect(wrapper.text()).toContain('Lesson 2: Hello world');

    await wrapper.setProps({ isLocked: true });

    expect(wrapper.find('[icon="lock"]').exists()).toBe(true);
  });
});
