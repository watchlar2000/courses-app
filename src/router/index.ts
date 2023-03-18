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
  },
  {
    path: '/course/:id',
    name: 'course',
    component: () => import('@/views/CourseView.vue'),
    meta: {
      title: 'Course',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: 'Not found',
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
  const { courses, checkCurrentPage, loadCourses, findDetailedCourseById } = useCourseStore();
  const { name } = to;
  const id = to.params.id as string;
  const { page } = to.query;

  if (page !== undefined && page !== null) {
    checkCurrentPage(+page);
  }

  if (name === 'home' && courses.length === 0) {
    loadCourses();
  } else if (name === 'course' && id !== undefined) {
    findDetailedCourseById(id);
  }

  window.document.title = `${to.meta.title}`;
  next();
});

export default router;
