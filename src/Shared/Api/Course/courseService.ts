import type { AxiosInstance } from 'axios';
import type { Course } from '../../../Types/Course';

export interface CourseService {
  getCourses(): Promise<Course[]>;
  getCourseById(id: string): Promise<Course>;
}

const { VITE_APP_COURSES_URL } = import.meta.env;

export class HttpCourseService implements CourseService {
  constructor(private httpClient: AxiosInstance) {}

  async getCourses(): Promise<Course[]> {
    const { data } = await this.httpClient.get(VITE_APP_COURSES_URL);
    return data.courses;
  }

  async getCourseById(id: string): Promise<Course> {
    const { data } = await this.httpClient.get(`${VITE_APP_COURSES_URL}/${id}`);
    return data;
  }
}
