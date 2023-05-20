<script setup lang="ts">
import DefaultLayout from './Layouts';
import RouterView from './Providers';
</script>

<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>

<style>
@import 'video.js/dist/video-js.css';
@import './Styles/index.scss';
</style>
