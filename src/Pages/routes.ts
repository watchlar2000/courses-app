import type { RouteRecordRaw } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./Home'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/course/:id',
    name: 'course',
    component: () => import('./Course'),
    meta: {
      title: 'Course',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('./NotFound'),
    props: true,
    meta: {
      title: '404',
    },
  },
] as Array<RouteRecordRaw>;
