import CourseDataService from '@/api/CourseDataService';
import type { Course } from '@/types/Course';
import type { CourseRootState } from '@/types/CourseRootState';
import { defineStore } from 'pinia';
// import { computed, ref } from 'vue';

enum Pagination {
  per_page = 10,
}

export const useCourseStore = defineStore('course', {
  state: () =>
  ({
    courses: [],
    selectedCourse: null,
    page: 1,
    loading: false,
  } as CourseRootState),

  actions: {
    async loadCourses(): Promise<any> {
      try {
        this.loading = true;
        const { data } = await CourseDataService.getAll();
        this.courses = data.courses as Course[];
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },

  getters: {
    paginate(): Course[] {
      const coursesPerPage = Pagination.per_page;

      if (this.page === 1) {
        return this.courses.slice(0, coursesPerPage);
      }

      const start = this.page * coursesPerPage;
      const end = start - coursesPerPage;

      return this.courses.slice(start, end);
    },
  },
});

// export const useCourseStore = defineStore('course', () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   return { count, doubleCount, increment };
// });
