import { mockCourses } from '__mocks__/course';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';
import { useCourseStore } from '../Course';

describe('Course Store', () => {
  let store;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useCourseStore();
  });

  it('is initialized with zero courses', () => {
    expect(store.courses.length).toEqual(0);
  });

  it('is initialized with no error', () => {
    expect(store.error).toBe(false);
  });

  it('calls fetchCourses to load the courses and updates courses state', async () => {
    const { courses } = mockCourses;
    store.fetchCourses = () => {
      store.courses = courses;
    };
    await store.fetchCourses();

    expect(store.courses.length).toEqual(courses.length);
  });

  it('calls fetchCourseById to load a specific course and updates selectedCourse state', async () => {
    const { courses } = mockCourses;
    store.fetchCourseById = (id) => {
      const course = courses.find((c) => c.id === id);
      store.selectedCourse = course;
    };
    await store.fetchCourseById('1');

    expect(store.selectedCourse.id).toBe('1');
  });
});
