import type { Course } from '../../../Types/Course';

export interface CourseRootState {
  courses: Course[];
  cashedCoursesDetails: Course[];
  selectedCourse: Course | null;
  currentPage: number;
  loading: boolean;
  error: boolean;
  errorCode: string | number;
}
