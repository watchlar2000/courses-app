import type { Course } from './Course';

export type CourseRootState = {
  courses: Course[];
  detailedCourses: Course[];
  page: number;
  loading: boolean;
  error: boolean;
  errorMessage: string;
};
