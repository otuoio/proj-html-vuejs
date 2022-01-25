<template>
  <main>
      <!-- jumbotron -->
      <section class="jumbo">
          <!-- centered-banner-box -->
          <div class="centered-banner-box container-80">
              <div class="col-left col-50">
                <p class="jumbo-intro"><span class="jumbo-intro-head">Hac tellus, felis felicis</span> lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quia veritatis distinctio similique? Deserunt alias nesciunt excepturi accusamus voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, alias accusamus unde dolorem incidunt..</p>
                <h1 class="jumbo-title">Food is our common ground, a universal experience</h1>
                <p class="jumbo-description">Temporibus doloribus iure culpa iste illo dolorum mollitia atque deleniti pariatur soluta. Praesentium doloremque nostrum, dicta libero nobis assumenda voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore eius officia possimus ratione sunt nihil deleniti.</p>
                <img src="../assets/img/signature-200x172.jpg" alt="signature">
              </div>
              <div class="col-right col-50">
                  <div class="jumbo-img">
                      <img src="../assets/img/info22x.jpg" alt="info22">
                      <span class="img-text">California rolls - &dollar;22</span>
                  </div>
              </div>
          </div>
          <!-- /centered-banner-box -->

      </section>
      <!-- /jumbotron -->

    <!-- call to action box -->
        <div class="cta-box container-80">
            <div class="col col-30">
                <img src="../assets/img/sushi-1.png" alt="sushi-1">
                <h4 class="cta-title">The best table in town</h4>
                <hr>
                <p class="cta-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae non facere. Placeat voluptas sunt ut, quae, vel blanditiis quia dolores.</p>
                <button class="btn cta-btn">Explore the menu</button>
            </div>
            <div class="col col-30">
                <img src="../assets/img/sushi-2.png" alt="sushi-2">
                <h4 class="cta-title">Perfect for groups</h4>
                <hr>
                <p class="cta-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit illum pariatur assumenda impedit incidunt ab repellendus alias.</p>
                <button class="btn cta-btn">Make a reservation</button>
            </div>
            <div class="col col-30">
                <img src="../assets/img/sushi-3.png" alt="sushi-3">
                <h4 class="cta-title">Fresh produce everyday</h4>
                <hr>
                <p class="cta-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum dolorum quasi nobis laboriosam qui est consequuntur quisquam?</p>
                <button class="btn cta-btn">Learn more about us</button>
            </div>
        </div>
    <!-- /call to action box -->

      <!-- banner-box da modificare con vuejs-->
      <div class="banner-box">
          <div class="img-box col-60">
            <img src="../assets/img/slider32x.jpg" alt="slider52x">
          </div>
          <InfoBox class="col-40" />   
      </div>
      <!-- /banner-box -->

      <!-- critics -->
      <section class="critics">
          <h2 class="sec-title"></h2>

          <!-- centered-banner-box -->
          <div class="centered-banner-box">
              <div class="col-left"></div>
              <div class="col-right"></div>
          </div>
          <!-- /centered-banner-box -->

          <!-- centered-banner-box -->
          <div class="centered-banner-box">
              <div class="col-left"></div>
              <div class="col-right"></div>
          </div>
          <!-- /centered-banner-box -->

          <!-- full screen banner -->
          <div class="fs-banner">
              <div class="picture"></div>
          </div>
          <!-- /full screen banner -->
      </section>
      <!-- /critics -->

      <!-- news & promotions -->
      <section class="promo">
          <h2 class="sec-title"></h2>

          <!-- call to action box -->
          <div class="cta-box">
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
          </div>
          <!-- /call to action box -->
      </section>
      <!-- /news & promotions -->

      <!-- banner-box -->
      <section class="banner-box">
          <div class="img-box"></div>
          <div class="info-box"></div>
      </section>
      <!-- /banner-box -->

      <!-- call to action box -->
        <div class="cta-box">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
      <!-- /call to action box -->

      <!-- full screen banner -->
        <div class="fs-banner">
            <div class="picture"></div>
            <div class="info-box"></div>
        </div>
      <!-- /full screen banner -->

  </main>
</template>

<script>
import InfoBox from './InfoBox.vue';

export default {
    name: 'Main',
    components: {
        InfoBox
    }
}
</script>

<style lang="scss">
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_mixins.scss';

@import '../assets/scss/partials/_jumbo.scss';
@import '../assets/scss/partials/_cta-box.scss';
.banner-box {
        @include flex(flex-start, flex-start, wrap);
        overflow: hidden;
        height: 1000px;
        @import '../assets/scss/partials/_img-box.scss';
        img {
            filter: brightness(0.7);
        }
    }


</style>