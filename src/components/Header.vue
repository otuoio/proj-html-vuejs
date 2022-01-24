<template>
  <header>
      <!-- header bar logo menu (da mettere con absolute) -->
      <div class="header-top">
          <div class="logo">
              <img src="../assets/img/logo-restaurant-2x-200x38.png" alt="Avada Restaurant">
          </div>
          <nav class="nav-menu">
              <ul class="menu-inline">
                  <li><a class="selected" href="#">Home</a></li>
                  <li><a href="#">Culinary History</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Our Menu</a></li>
                  <li><a href="#">Takeout <span class="tag">New</span></a></li>
                  <li><a href="#">Bulletin</a></li>
                  <li><a href="#">Reservations</a></li>
                  <li><a href="#"><font-awesome-icon icon="shopping-cart" /></a></li>
              </ul>
          </nav>
      </div>
      <!-- /header bar logo menu -->
      <!-- banner-box -->
      <section class="banner-box">
          <div class="info-box"></div>
          <div class="img-box"></div>
      </section>
      <!-- /banner-box -->
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_mixins.scss';

header {
    position: relative;
    background-color: $zeus-color;
    height: 500px;
    .header-top {
        @include absolute(0, 0);
        width: 100%;
        height: 100px;
        background-color: transparent;
        @include flex(space-between, center, wrap);
        padding: 0 5em;
        li {
            margin: 0 1em;
            .tag {
                display: inline-block;
                border: 1px solid $silver-color;
                padding: .5em 1em;
                font-size: .7em;
            }
        }
    }
}
</style>