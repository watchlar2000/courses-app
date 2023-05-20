import { mount } from '@vue/test-utils';
import { mockCourse } from '__mocks__/course';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import CourseCard from '../../CourseCard';

const { id, title, lessons, rating, previewImageLink: image, meta } = mockCourse;

describe('CourseCard', () => {
  let wrapper;

  const props = {
    id,
    title,
    lessonsCount: lessons.length,
    rating,
    image,
    skills: meta.skills,
    video: meta.courseVideoPreview.link,
  };

  beforeEach(() => {
    wrapper = mount(CourseCard, {
      props,
      global: {
        stubs: ['router-link', 'font-awesome-icon'],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('has imageSource computed function which works properly', () => {
    expect(wrapper.vm.imageSource).toMatch(`${props.image}/cover.webp`);
  });

  it('has areSkillsPresented computed function which works properly', async () => {
    expect(wrapper.vm.areSkillsPresented).toBe(true);

    await wrapper.setProps({ skills: [] });

    expect(wrapper.vm.areSkillsPresented).toBe(false);
  });

  // it('renders properly', async () => {
  //   expect(wrapper.getComponent({ name: 'card-header' }).exists()).toBe(true);
  // });
});
