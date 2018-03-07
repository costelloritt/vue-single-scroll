<template>
  <div class="nav-container">
      <!-- Dropdown Structure -->
      <ul id="planets-dropdown" class="dropdown-content">
          <li><a href="#!">Mercury</a></li>
          <li><a href="#!">Venus</a></li>
          <li><a href="#!">Earth</a></li>
          <li><a href="#!">Mars</a></li>
          <li><a href="#!">Jupiter</a></li>
          <li><a href="#!">Saturn</a></li>
          <li><a href="#!">Uranus</a></li>
          <li><a href="#!">Neptune</a></li>
      </ul>
      <!-- <div class="navbar-fixed"> -->
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo right">Logo</a>
                <ul class="left hide-on-small-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sun</a></li>
                    <li><a class="dropdown-button" href="#!" data-activates="planets-dropdown">Planets<i class="material-icons right">arrow_drop_down</i></a></li>
                </ul>
            </div>
        </nav>
      <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
    nav {
        background-color: rgba(55, 55, 55, 0.65);
        position: fixed;
        top: 0;
    }

    #planets-dropdown {
      background-color: rgba(55, 55, 55, 0.9);
    }

    #planets-dropdown a {
      color: white;
    }
</style>
