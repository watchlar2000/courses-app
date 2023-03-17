import FontAwesomeIcon from '@/assets/icons/fontawesome-icons';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './assets/styles/main.scss';

const app = createApp(App);

app.use(createPinia()).use(router).component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
