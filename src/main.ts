import FontAwesomeIcon from '@/assets/icons/fontawesome-icons';
import VueVideoPlayer from '@videojs-player/vue';
import { createPinia } from 'pinia';
import 'video.js/dist/video-js.css';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './assets/styles/main.scss';

const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(VueVideoPlayer);

app.mount('#app');
