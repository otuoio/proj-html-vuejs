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

      <!-- banner-box -->
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
            <CriticsCard class="col-rigth col-50"
            :card="criticsCards[0]"
            />
        </div>
          <!-- /critics-full-card -->

          <!-- critics-overlay-card -->
          <div class="critics-overlay-card container-70">
              <div class="col-left">
                  <CriticsCard 
                  :card="criticsCards[1]"
                  />
              </div>
              <div class="col-right">
                  <CriticsCard 
                  :card="criticsCards[2]"
                  />
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
          <h3 class="promo-title">Latest news &amp; promotions</h3>

          <!-- promo cards -->
          <div class="promo-cards container-70">
              <div class="promo-card col-30">
                <img src="../assets/img/blog92x-1200x1375.jpg" alt="blog92x-1200x1375">
                <h4 class="promo-card-title">The best Coffee in town</h4>
                <div class="promo-credits">
                    <p class="promo-card-author">By admin</p>
                    <p class="promo-card-date">January 7th, 2020</p>
                    <p class="promo-card-categories">Categories: News</p>
                </div>
              </div>
              <div class="promo-card col-30">
                  <img src="../assets/img/blog92x-1200x1375.jpg" alt="blog92x-1200x1375">
                    <h4 class="promo-card-title">The best Coffee in town</h4>
                    <div class="promo-credits">
                        <p class="promo-card-author">By admin</p>
                        <p class="promo-card-date">January 7th, 2020</p>
                        <p class="promo-card-categories">Categories: News</p>
                    </div>
              </div>
              <div class="promo-card col-30">
                  <img src="../assets/img/blog92x-1200x1375.jpg" alt="blog92x-1200x1375">
                    <h4 class="promo-card-title">The best Coffee in town</h4>
                    <div class="promo-credits">
                        <p class="promo-card-author">By admin</p>
                        <p class="promo-card-date">January 7th, 2020</p>
                        <p class="promo-card-categories">Categories: News</p>
                    </div>
              </div>
          </div>
          <!-- /promo cards -->
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

      <!-- menus -->
        <section class="menus">
            <div class="menu-cards container-90">
                <div class="menu-card menu-card-silver">
                    <div class="menu-card-container">
                        <h2 class="menu-card-title">Hors d'oeuvres</h2>
                        <div class="menu-card-dishes">
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-card menu-card-black">
                    <div class="menu-card-container">
                        <h2 class="menu-card-title">Hors d'oeuvres</h2>
                        <div class="menu-card-dishes">
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-card menu-card-silver">
                    <div class="menu-card-container">
                        <h2 class="menu-card-title">Hors d'oeuvres</h2>
                        <div class="menu-card-dishes">
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                            <div class="menu-card-dish">
                                <div class="menu-card-dish-title">
                                    <h4 class="menu-card-dish-name">Ahi salmon nigiri</h4>
                                    <span class="menu-card-dish-price">&dollar;48</span>
                                </div>
                                <p class="menu-card-dish-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <!-- /menus -->

      <!-- full screen banner -->
    <div class="fs-banner-bottom">
        <img src="../assets/img/hero42x.jpg" alt="hero42x">
        <div class="fs-banner-info">
            <div class="item">
                <h2 class="info-title">Braised abalone</h2>
                <span class="info-price">&dollar;52</span>
            </div>
            <hr>
            <p class="info-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat illum iusto!</p>
            <button class="btn info-btn">View in the menu</button>
        </div>
    </div>
      <!-- /full screen banner -->

  </main>
</template>

<script>
import InfoBox from './InfoBox.vue';
import ImageBox from './ImageBox.vue';
import CallToActionCard from './CallToActionCard.vue';
import CriticsCard from './CriticsCard.vue';
import BannerFs from './BannerFs.vue';

export default {
    name: 'Main',
    components: {
        InfoBox,
        ImageBox,
        CallToActionCard,
        CriticsCard,
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
            criticsCards: [
                {
                    name: 'Meggy Stewart',
                    magazine: 'New York Times',
                    vote: 5,
                    review: `Temporibus doloribus iure culpa iste illo dolorum mollitia atque deleniti pariatur soluta. Praesentium doloremque nostrum, dicta libero nobis assumenda voluptas. <br>
                    <br> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore eius officia possimus ratione sunt nihil deleniti.`,
                    button: 'Read full article'
                },
                {
                    name: 'Mary Maxey',
                    magazine: 'The Guardian',
                    vote: 4,
                    review: 'Temporibus doloribus iure culpa iste illo dolorum mollitia atque deleniti pariatur soluta. Praesentium doloremque nostrum, dicta libero nobis assumenda voluptas.',
                    button: 'Read full article'
                },
                {
                    name: 'Patrick Monroe',
                    magazine: 'Globe and Mail',
                    vote: 5,
                    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod pariatur ad soluta possimus dicta optio nam ipsa nesciunt asperiores praesentium, distinctio a.',
                    button: 'Read full article'
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
.promo {
    background-color: $white-color;
    text-align: center;
    margin-bottom: 2em;
    .promo-title {
        @include font(2em, 400, unset, $tundora-color);
        margin: 3em 0;
    }
    .promo-cards {
        @include flex(space-around, center, wrap);
        @import '../assets/scss/partials/_promoCard.scss';
    }
}
.menus {
    background-color: $white-color;
    margin-top: 8em;
    margin-bottom: 8em;
    .menu-cards {
        @include flex(center, center, wrap);
        @import '../assets/scss/partials/_menuCard.scss';
    }
}
@import '../assets/scss/partials/_fsBannerBottom.scss';
</style>