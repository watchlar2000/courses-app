import FontAwesomeIcon from '@/assets/icons/fontawesome-icons';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './assets/styles/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

router.isReady().then(() => {
  app.mount('#app');
});
