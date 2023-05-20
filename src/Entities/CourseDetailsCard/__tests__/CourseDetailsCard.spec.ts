import { mount } from '@vue/test-utils';
import { mockCourse } from '__mocks__/course';
import { describe, expect, it } from 'vitest';
import CourseDetailsCard from '..';
import CardHeader from '../../../Shared/Components/CardHeader';
import VideoPlayer from '../../../Shared/Components/VideoPlayer';
import GoBackButton from '../Ui/GoBackButton';
import LessonList from '../Ui/LessonsList';
import LessonsListItem from '../Ui/LessonsListItem';

describe('CourseDetailsCard', () => {
  const props = {
    course: mockCourse,
  };

  it('renders properly', () => {
    const wrapper = mount(CourseDetailsCard, {
      props,
      global: {
        stubs: ['font-awesome-icon'],
      },
    });

    expect(wrapper.getComponent(GoBackButton).exists()).toBe(true);
    expect(wrapper.getComponent(CardHeader).exists()).toBe(true);
    expect(wrapper.getComponent(VideoPlayer).props('src')).toBe(
      mockCourse.meta.courseVideoPreview.link,
    );
    expect(wrapper.getComponent(LessonList).exists()).toBe(true);
    expect(wrapper.findAllComponents(LessonsListItem)).toHaveLength(5);
  });
});
