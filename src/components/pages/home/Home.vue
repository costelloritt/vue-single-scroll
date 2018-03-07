<template>
  <div class="home-container">
    <top></top>
    <sun></sun>
  </div>
</template>

<script>
import Top from './components/Top';
import Sun from './components/Sun';

export default {
  name: 'Home',
  components: {
    'top': Top,
    'sun': Sun
  }
}
</script>

<style scoped>
</style>
