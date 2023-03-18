<template>
  <video-player
    class="video-player"
    poster="https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/cover.webp"
    crossorigin="anonymous"
    playsinline
    controls
    liveui
    :sources="[videoSource]"
    :volume="0.6"
    :height="320"
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
    @ready="handleReady"
  />
</template>

<script lang="ts">
import { VideoPlayer } from '@videojs-player/vue';
// import '@videojs/themes/dist/forest/index.css';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { defineComponent, shallowRef } from 'vue';

export default defineComponent({
  name: 'vue-hls-player-example',
  title: 'HLS Live player (Vue)',
  url: import.meta.url,
  components: {
    VideoPlayer,
  },
  setup() {
    const videoSource = {
      src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      type: 'application/x-mpegURL',
    };
    const player = shallowRef();
    const handleMounted = (payload: any) => {
      player.value = payload.player;
      console.log('HLS Live player mounted', payload);
    };
    const handleReady = () => {
      // https://github.com/videojs/http-streaming#vhsxhr
      const { vhs } = player.value?.tech() as any;
      vhs.xhr.beforeRequest = (options: any) => {
        // console.log('vhs.xhr.beforeRequest', options)
        // do something...
        return options;
      };
    };
    return {
      isSafari: videojs.browser.IS_SAFARI,
      videoSource,
      handleMounted,
      handleReady,
    };
  },
});
</script>

<style lang="scss" scoped></style>
