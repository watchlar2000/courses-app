import { useCourseStore } from '@/store/course';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home',
    },
    async beforeEnter(to, next) {
      const { loadCourses, courses, checkCurrentPage } = useCourseStore();

      const { page } = to.query;

      if (page !== undefined && page !== null) {
        checkCurrentPage(+page);
      }

      try {
        if (courses.length === 0) {
          loadCourses();
        }
        next;
      } catch (e) {
        console.log(e);
      }
    }
  },
  {
    path: '/course/:id',
    name: 'course',
    component: () => import('@/views/CourseView.vue'),
    meta: {
      title: 'Course',
    },
    async beforeEnter(to, next) {
      const { findDetailedCourseById } = useCourseStore();

      const id = to.params.id as string;

      try {
        await findDetailedCourseById(id);
        next;
      } catch (e) {
        console.log(e);
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: '404',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

router.beforeEach((to, from, next) => {
  window.document.title = `${to.meta.title}`;
  next();
});

export default router;
