<template>
  <navigator/>

  <video autoplay muted loop id="background-video">
    <source src="../static/3326258-uhd_2560_1440_25fps.mp4" type="video/mp4">
  </video>

  <el-image src="../src/static/motto.png" fit="scale-down" loading="lazy" id="motto" />
</template>
<script setup lang="ts">
import {onMounted} from "vue";
import Navigator from "./component/navigator.vue";

onMounted(() => {
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
});
</script>
<style lang="scss">
@use "../static/base.scss" as basement;

#motto{
  position: absolute;
  width: 400px;
  height: 250px;
  top: 26vh;
  left: 36vw;
}

#background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -10;
}
</style>