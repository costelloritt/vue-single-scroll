<template>
  <div class="home-container">
      <h1>Explore the Solar System</h1>
      <br>
      <a class="waves-effect waves-light btn">Sun</a>
      <br><br>
      <a class="waves-effect waves-light btn">Mercury</a>
      <a class="waves-effect waves-light btn">Venus</a>
      <br><br>
      <a class="waves-effect waves-light btn">Earth</a>
      <a class="waves-effect waves-light btn">Mars</a>
      <br><br>
      <a class="waves-effect waves-light btn">Jupiter</a>
      <a class="waves-effect waves-light btn">Saturn</a>
      <br><br>
      <a class="waves-effect waves-light btn">Uranus</a>
      <a class="waves-effect waves-light btn">Neptune</a>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
    /* Fixed, full screen background image */
    .home-container {
        background-image: url(../../assets/images/backgrounds/top-background.jpg);
        background: top fixed center;
        background-size: cover;
        height: 100vh;
        width: 100vw;
        display: table-cell;
        padding-top: 60px;
    }

    h1 {
       color: white; 
    }

    .btn {
        width: 130px;
    }
</style>
