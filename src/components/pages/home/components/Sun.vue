<template>
  <div class="sun-outer-container">
    <div class="sun-inner-container">
      <h1>THE SUN</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sun'
}
</script>

<style scoped>
  .sun-outer-container {
    background: center fixed;
    background-image: url(../../../../assets/images/backgrounds/sun.jpg);
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: table-cell;
    margin-top: 0;
  }

  .sun-inner-container {
    padding-top: 60px;
  }

  div {
    color: white;
  }
</style>
