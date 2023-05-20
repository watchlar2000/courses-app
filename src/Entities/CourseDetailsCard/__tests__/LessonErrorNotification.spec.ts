import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LessonErrorNotification from '../Ui/LessonsListItem/Ui/LessonErrorNotification';

describe('LessonErrorNotification', () => {
  it('renders properly', async () => {
    const wrapper = mount(LessonErrorNotification, {
      slots: {
        default: 'Test error',
      },
    });

    expect(wrapper.text()).toMatch('Test error');
  });

  it('renders slots content properly', async () => {
    const wrapper = mount(LessonErrorNotification, {
      slots: {
        default: `
          <h2>Another error</h2>
        `,
      },
    });

    expect(wrapper.text()).toMatch('Another error');
    expect(wrapper.find('h2').exists()).toBe(true);
  });
});
