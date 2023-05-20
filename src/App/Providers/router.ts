import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '../../Pages/routes';
import { authService } from '../../Shared/Api';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0, behavior: 'smooth' };
    }
  },
});

router.beforeEach(async (to, from, next) => {
  window.document.title = `${to.meta.title}`;

  await authService.isUserLoggedIn();

  next();
});
