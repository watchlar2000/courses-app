import CourseDataService from '@/api/CourseDataService';
import type { Course } from '@/types/Course';
import type { CourseRootState } from '@/types/CourseRootState';
import { defineStore } from 'pinia';

enum Pagination {
  per_page = 10,
}

export const useCourseStore = defineStore('course', {
  state: () =>
    ({
      courses: [],
      detailedCourses: [],
      selectedCourse: {},
      page: 1,
      loading: false,
      error: false,
      errorMessage: '',
    } as CourseRootState),

  actions: {
    async loadCourses() {
      try {
        this.loading = true;
        const { data } = await CourseDataService.getAll();
        this.courses = data.courses;
      } catch (e: unknown) {
        const typedError = e as Error;
        this.error = true;
        this.errorMessage = typedError.message;
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async loadCourseById(id: string): Promise<any> {
      try {
        this.loading = true;
        const { data } = await CourseDataService.getCourseById(id);
        this.detailedCourses.push(data);
        return data;
      } catch (e: unknown) {
        const typedError = e as Error;
        this.error = true;
        this.errorMessage = typedError.message;
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async findDetailedCourseById(id: string): Promise<any> {
      const courseData = this.detailedCourses.find((course) => course.id === id);

      if (courseData !== undefined) {
        this.selectedCourse = courseData;
        return;
      }

      this.selectedCourse = await this.loadCourseById(id);
      return;
    },
    checkCurrentPage(page: number) {
      if (this.page !== page) {
        this.page = page;
      }
    },
  },

  getters: {
    paginate(): Course[] {
      const coursesPerPage = Pagination.per_page;

      if (this.page === 1) {
        return this.courses?.slice(0, coursesPerPage);
      }

      const end = this.page * coursesPerPage;
      const start = end - coursesPerPage;

      return this.courses?.slice(start, end);
    },
    totalPages(): number {
      return Math.ceil(this.courses.length / Pagination.per_page);
    },
  },
});
