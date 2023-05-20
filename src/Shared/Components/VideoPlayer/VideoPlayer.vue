<script lang="ts" setup>
import { VideoPlayer } from '@videojs-player/vue';
import { reactive } from 'vue';

const emit = defineEmits<{
  (e: 'source-error'): void;
}>();

const props = defineProps<{
  src: string;
  poster: string;
}>();

interface IVideoSource {
  src: string;
  type: string;
}

const videoSource = reactive<IVideoSource>({
  src: props.src,
  type: 'application/x-mpegURL',
});

const onError = () => {
  emit('source-error');
};
</script>

<template>
  <video-player
    ref="player"
    :poster="poster"
    :sources="[videoSource]"
    class="video-player"
    crossorigin="anonymous"
    @error="onError"
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

.vjs-big-play-button {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
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
