import VueVideoPlayer from '@videojs-player/vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import FontAwesomeIcon from '../Shared/Components/Icons';
import App from './App.vue';
import { router } from './Providers/router';

export const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(VueVideoPlayer);
