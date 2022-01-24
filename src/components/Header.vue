<template>
  <header>
      <!-- header bar logo menu (da mettere con absolute) -->
      <div class="header-top">
          <div class="col-40 logo">
              <img src="../assets/img/logo-restaurant-2x-300x58.png" alt="Avada Restaurant">
          </div>
          <nav class="col-60 nav-menu">
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
      <div class="banner-box">
          <div class="info-box">
              <div class="col-20">
                  <hr>
              </div>
              <div class="col-80 card">
                  <h5 class="card-subtitle">The best table in town</h5>
                  <h1 class="card-title">Fine dining experience</h1>
                  <p class="card-description">Temporibus doloribus iure culpa iste illo dolorum mollitia atque deleniti pariatur soluta. Praesentium doloremque nostrum, dicta libero nobis assumenda voluptas.</p>
                  <button class="btn card-btn">Explore the menu</button>
              </div>
          </div>
          <div class="img-box">
              <img src="../assets/img/slider52x.jpg" alt="slider52x">
          </div>
      </div>
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
    .header-top {
        @include absolute(0, 0);
        width: 100%;
        height: 15vh;
        background-color: transparent;
        @include flex(flex-start, start, wrap);
        padding: 0 5em;
        .logo {
            height: 100%;
            @include flex(flex-start, center, wrap);
            img {
                width: 50%;
            }
        }
        .nav-menu {
            height: 100%;
            @include flex(center, center, wrap);
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
    .banner-box {
        @include flex(flex-start, flex-start, wrap);
        overflow: hidden;
        height: 100vh;
        @import '../assets/scss/partials/_info-box.scss';
        .info-box {
            width: 40%;
        }
        @import '../assets/scss/partials/_img-box.scss';
        .img-box {
            width: 60%;
        }
    }
}
</style>