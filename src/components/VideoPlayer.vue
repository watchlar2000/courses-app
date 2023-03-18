<template>
  <video-player
    class="video-player"
    poster="https://hips.hearstapps.com/hmg-prod/images/2023-ferrari-812-gts-102-1674153867.jpg?crop=0.943xw:1.00xh;0.0293xw,0&resize=768:*"
    crossorigin="anonymous"
    playsinline
    controls
    liveui
    :sources="[videoSource]"
    :volume="0.6"
    :height="250"
    :control-bar="{
      progressControl: false,
      currentTimeDisplay: false,
      remainingTimeDisplay: false,
    }"
    :html5="{
      vhs: {
        // https://github.com/videojs/http-streaming#options
        overrideNative: !isSafari,
        maxPlaylistRetries: Infinity,
      },
      nativeAudioTracks: false,
      nativeVideoTracks: false,
    }"
    @mounted="handleMounted"
  />
</template>

<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue';
import { shallowRef } from 'vue';

// interface VideoSource {
//   src: string;
//   type: string;
// }

const props = defineProps<{
  poster: string;
}>();

const videoSource = {
  src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  type: 'application/x-mpegURL',
};

const player = shallowRef();
const handleMounted = (payload: any) => {
  player.value = payload.player;
  console.log('HLS Live player mounted', payload);
};
</script>

<style lang="scss" scoped></style>
