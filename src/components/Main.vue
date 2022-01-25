<template>
  <main>
      <!-- jumbotron -->
      <section class="jumbo">
          <!-- centered-banner-box -->
          <div class="centered-banner-box container-80">
              <div class="col-left col-50">
                <p class="jumbo-intro"><span class="jumbo-intro-head">Hac tellus, felis felicis</span> lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quia veritatis distinctio similique? Deserunt alias nesciunt excepturi accusamus voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, alias accusamus unde dolorem incidunt dignissimos, suscipit architecto perferendis veniam possimus.</p>
                <h1 class="jumbo-title">Food is our common ground, a universal experience</h1>
                <p class="jumbo-description">Temporibus doloribus iure culpa iste illo dolorum mollitia atque deleniti pariatur soluta. Praesentium doloremque nostrum, dicta libero nobis assumenda voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore eius officia possimus ratione sunt nihil deleniti blanditiis. Impedit corporis quasi veniam omnis a delectus illum fugiat, quas dolores consectetur?</p>
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

          <!-- call to action box -->
          <div class="cta-box">
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
          </div>
          <!-- /call to action box -->
      </section>
      <!-- /jumbotron -->

      <!-- banner-box -->
      <section class="banner-box">
          <div class="img-box"></div>
          <div class="info-box"></div>
      </section>
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
export default {
    name: 'Main'
}
</script>

<style lang="scss">
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_mixins.scss';

.jumbo {
    background-color: $white-color;
    width: 100%;
    height: 1200px;
    .centered-banner-box {
        height: 80%;
        overflow: hidden;
        background-color: transparent;
        margin-top: 5rem;
        margin-bottom: 5rem;
        @include flex(flex-start, start, wrap);
        .col-left {
            height: 100%;
            padding: 5em;
            .jumbo-intro {
                .jumbo-intro-head {
                    @include font(1em, 600, uppercase, $black-color);
                }
                @include font(1em, 400, unset, $black-color);
            }
            .jumbo-title {
                @include font(3em, 600, uppercase, $black-color);
            }
            .jumbo-description {
                @include font(1em, 400, unset, $black-color);
            }
            img {
                width: 30%;
                margin: 3em 0;
            }
            .jumbo-intro,
            .jumbo-title {
                margin-bottom: 5rem;
            }
        }
        .col-right {
            padding: 3em;
            height: 100%;
            .jumbo-img {
                height: 100%;
                position: relative;
                img {
                    filter: brightness(0.6);
                    width: 100%;
                    height: 100%;
                }
                .img-text {
                    @include font(1em, 500, uppercase, $white-color);
                    @include absolute_l(95%, 50%);
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
}

</style>