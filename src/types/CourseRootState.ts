import type { Course } from './Course';

export type CourseRootState = {
  courses: Course[];
  selectedCourse: Course | null;
  page: number;
  loading: boolean;
};
