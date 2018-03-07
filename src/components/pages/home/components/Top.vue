<template>
  <div class="page-container">
    <div class="top-container">
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
  </div>
</template>

<script>
// import Sun from './components/Sun';

export default {
  name: 'Top',
  // components: {
  //   'sun': Sun
  // }
}
</script>

<style scoped>
    /* Fixed, full screen background image */
    .top-container {
        background: top center fixed;
        background-image: url(../../../../assets/images/backgrounds/top-background.jpg);
        background-size: cover;
        display: table-cell;
        padding-top: 60px;
        height: 100vh;
        width: 100vw;
    }

    /* .home-container {
        height: 100vh;
        width: 100vw;
        display: table-cell;
    } */

    h1 {
       color: white;
    }

    .btn {
        width: 130px;
    }
</style>
