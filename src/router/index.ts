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
  // scrollBehavior() {
  //   return { x: 0, y: 0, behavior: 'smooth' };
  // },
});

router.beforeEach((to, from, next) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.document.title = `${to.meta.title}`;
  next();
});

export default router;
