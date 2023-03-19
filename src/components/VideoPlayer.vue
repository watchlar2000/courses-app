<script lang="ts" setup>
import { VideoPlayer } from '@videojs-player/vue';
import 'video.js/dist/video-js.css';
import { reactive } from 'vue';

const props = defineProps<{
  src: string;
  poster: string;
}>();

const videoSource = reactive({
  src: props.src,
  type: 'application/x-mpegURL',
});
</script>

<template>
  <div v-if="props.src === ''">Loading..</div>
  <video-player
    autoplay
    class="video-player vjs-theme-forest"
    :poster="poster"
    crossorigin="anonymous"
    playsinline
    controls
    :sources="[videoSource]"
  />
</template>

<style lang="scss">
.video-js {
  position: relative !important;
  width: 100% !important;
  height: 370px;
}

.video-js .vjs-control-bar {
  height: 48px;
}

.vjs-modal-dialog .vjs-modal-dialog-content,
.video-js .vjs-modal-dialog,
.vjs-button > .vjs-icon-placeholder:before,
.video-js .vjs-big-play-button .vjs-icon-placeholder:before {
  position: static;
}

.video-js .vjs-volume-panel {
  align-items: center;
}

.video-js .vjs-time-control {
  margin-top: 8px;
}

.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
  align-self: center;
}
</style>
