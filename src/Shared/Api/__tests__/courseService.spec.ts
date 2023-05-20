import axios from 'axios';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mockCourses } from '../../../../__mocks__/course';
import { HttpCourseService } from '../Course/courseService';

vi.mock('axios');

describe('CourseService', () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  it('makes a GET request to fetch the courses', async () => {
    const mockAuthService = new HttpCourseService(axios);
    axios.get.mockResolvedValueOnce({ data: { courses: mockCourses } });
    const { courses } = await mockAuthService.getCourses();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(courses).toStrictEqual(mockCourses.courses);
  });

  it('makes a GET request to fetch the particular course by ID', async () => {
    const mockAuthService = new HttpCourseService(axios);
    axios.get.mockResolvedValueOnce({ data: { course: mockCourses.courses[0] } });
    const { course } = await mockAuthService.getCourseById('1');

    expect(course).toStrictEqual(mockCourses.courses[0]);
    expect(course.id).toMatch('1');
  });
});
