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
       <CallToActionCard 
       v-for="(card, index) in ctaBoxCards"
       :key="index"
       :card="card"
       />
    </div>
    <!-- /call to action box -->

      <!-- banner-box DA MODIFICARE AGGIUNGENDO ARRAY CON DATI -->
      <div class="banner-box">
          <ImageBox 
          :obj="banner[1]"
          />
          <InfoBox 
          :obj="banner[1]"
          />   
      </div>
      <!-- /banner-box -->

      <!-- critics -->
      <section class="critics">
          <h3 class="critics-title" style="font-style: italic;">What critics are saying about us</h3>

          <!-- critics-full-card -->
          <div class="critics-full-card container-70">
              <div class="col-left col-50">
                <img src="../assets/img/blog72x-800x916.jpg" alt="blog72x-800x916">
              </div>
              <div class="col-rigth col-50 critics-card">
                <h4 class="critics-name">Meggy Stewart</h4>
                <h2 class="critics-cardtitle">New York Times</h2>
                <div class="vote">
                    <font-awesome-icon icon="star" class="star"/>
                    <font-awesome-icon icon="star" class="star"/>
                    <font-awesome-icon icon="star" class="star"/>
                    <font-awesome-icon icon="star" class="star"/>
                    <font-awesome-icon icon="star" class="star"/>
                </div>
                <hr>
                <p class="critics-description">Temporibus doloribus iure culpa iste illo dolorum mollitia atque deleniti pariatur soluta. Praesentium doloremque nostrum, dicta libero nobis assumenda voluptas. <br>
                <br> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore eius officia possimus ratione sunt nihil deleniti.</p>
                <button class="btn critics-btn">Read full article</button>
              </div>
          </div>
          <!-- /critics-full-card -->

          <!-- critics-overlay-card -->
          <div class="critics-overlay-card container-70">
              <div class="col-left">
                  <div class="critics-card">
                    <h4 class="critics-name">Mary Maxey</h4>
                    <h2 class="critics-cardtitle">The Guardian</h2>
                    <div class="vote">
                        <font-awesome-icon icon="star" class="star"/>
                        <font-awesome-icon icon="star" class="star"/>
                        <font-awesome-icon icon="star" class="star"/>
                        <font-awesome-icon icon="star" class="star"/>
                        <font-awesome-icon icon="star" class="star"/>
                    </div>
                    <hr>
                    <p class="critics-description">Temporibus doloribus iure culpa iste illo dolorum mollitia atque deleniti pariatur soluta. Praesentium doloremque nostrum, dicta libero nobis assumenda voluptas.</p>
                    <button class="btn critics-btn">Read full article</button>
                  </div>
              </div>
              <div class="col-right">
                  <div class="critics-card">
                    <h4 class="critics-name">Patrick Monroe</h4>
                    <h2 class="critics-cardtitle">Globe and Mail</h2>
                    <div class="vote">
                        <font-awesome-icon icon="star" class="star"/>
                        <font-awesome-icon icon="star" class="star"/>
                        <font-awesome-icon icon="star" class="star"/>
                        <font-awesome-icon icon="star" class="star"/>
                        <font-awesome-icon icon="star" class="star"/>
                    </div>
                    <hr>
                    <p class="critics-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod pariatur ad soluta possimus dicta optio nam ipsa nesciunt asperiores praesentium, distinctio a.</p>
                    <button class="btn critics-btn">Read full article</button>
                  </div>
              </div>
          </div>
          <!-- /critics-overlay-card -->

      </section>
      <!-- /critics -->

    <!-- full screen banner -->
        <BannerFs />
    <!-- /full screen banner -->

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
      <div class="banner-box">
          <ImageBox 
          :obj="banner[2]"
          />
          <InfoBox 
          :obj="banner[2]"
          />   
      </div>
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
import ImageBox from './ImageBox.vue';
import CallToActionCard from './CallToActionCard.vue';
import BannerFs from './BannerFs.vue';

export default {
    name: 'Main',
    components: {
        InfoBox,
        ImageBox,
        CallToActionCard,
        BannerFs
    },
    props: {
        banner: {
            type: Array
        }
    },
    data() {
        return {
            ctaBoxCards: [
                {
                    title: 'The best table in town',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae non facere. Placeat voluptas sunt ut, quae, vel blanditiis quia dolores.',
                    button: 'Explore the menu',
                    picture: 'sushi-1.png'
                },
                {
                    title: 'Perfect for groups',
                    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit illum pariatur assumenda impedit incidunt ab repellendus alias.',
                    button: 'Make a reservation',
                    picture: 'sushi-2.png'
                },
                {
                    title: 'Fresh produce everyday',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum dolorum quasi nobis laboriosam qui est consequuntur quisquam?',
                    button: 'Learn more about us',
                    picture: 'sushi-3.png'
                },
            ],
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_mixins.scss';

@import '../assets/scss/partials/_jumbo.scss';
.banner-box {
        @include flex(flex-start, flex-start, wrap);
        overflow: hidden;
        height: 1000px;
}
.cta-box {
    padding: 5em 2em;
    @include flex(center, center, wrap);
}
.critics {
    background-color: $white-color;
    text-align: center;
    .critics-title {
        @include font(2em, 400, unset, $tundora-color);
        margin: 3em 0;
    }
    .critics-full-card {
        height: 800px;
        @include flex(flex-start, center, wrap);
        text-align: left;
        .col-left {
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .critics-card {
            background-color: $black-color;
            transition: all 1s;
        }
        .critics-card:hover {
            transform: scale(1.03);
        }
        @import '../assets/scss/partials/_criticsCard.scss';
        
    }
    .critics-overlay-card {
        height: 800px;
        @include flex(flex-start, center, wrap);
        text-align: left;
        margin-top: 2em;
        .col-left,
        .col-right {
            width: calc(50% - 1em);
            height: 100%;
            margin-right: 1em;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            @import '../assets/scss/partials/_criticsCard.scss';
            .critics-card {
                background-color: rgba($color: #000000, $alpha: 0.7);
            }
        }
        .col-left {
            background-image: url('../assets/img/info52x.jpg');
        }
        .col-right {
            background-image: url('../assets/img/info12x.jpg');
        }
        
    }
}
</style>