import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import LessonNotification from '../Ui/LessonNotification';

describe('LessonNotification', () => {
  const props = {
    title: 'Test lesson',
    order: 5,
  };

  it('renders properly', async () => {
    const wrapper = mount(LessonNotification, {
      props,
    });

    expect(wrapper.find('p').text()).toMatch('You are watching lesson #5');
    expect(wrapper.find('span').text()).toMatch('Test lesson');
  });
});
