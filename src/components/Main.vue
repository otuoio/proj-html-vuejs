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
              <PromoCard 
              v-for="(card, index) in promoCards"
              :key="index"
              :card="card"
              />
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
                <MenuCard 
                v-for="(card, index) in menuCards"
                v-bind:key="index"
                :class="(index % 2 == 0) ? 'menu-card-silver' : 'menu-card-black'"
                :card="card"
                />
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
import PromoCard from './PromoCard.vue';
import MenuCard from './MenuCard.vue';

export default {
    name: 'Main',
    components: {
        InfoBox,
        ImageBox,
        CallToActionCard,
        CriticsCard,
        BannerFs,
        PromoCard,
        MenuCard
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
            promoCards: [
                {
                    picture: 'blog92x-1200x1375.jpg',
                    title: 'The best Coffee in town',
                    categories: 'News',
                    author: 'admin',
                    date: 'January 7th, 2020',
                    icon: 'link'
                },
                {
                    picture: 'blog72x-1200x1375.jpg',
                    title: 'Discover our new menu',
                    categories: 'News',
                    author: 'admin',
                    date: 'January 7th, 2020',
                    icon: 'link'
                },
                {
                    picture: 'blog82x-1200x1375.jpg',
                    title: 'We now accept square!',
                    categories: 'News',
                    author: 'admin',
                    date: 'January 7th, 2020',
                    icon: 'link'
                },
            ],
            menuCards: [
                {
                    title: 'Hors d\'oeuvres',
                    dishes: [
                        {
                            'name': 'Ahi salmon nigiri',
                            'price': 48,
                            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!'
                        },
                        {
                            'name': 'Umi masu salad',
                            'price': 21,
                            'description': 'Recusandae porro iure molestiae totam maiores, reprehenderit mollitia unde eaque facere maxime.'
                        },
                        {
                            'name': 'Temaki with crab',
                            'price': 32,
                            'description': 'Quos incidunt, praesentium facere dolores distinctio fuga, ipsum quis voluptatem.'
                        },
                        {
                            'name': 'California rolls',
                            'price': 22,
                            'description': 'Sapiente provident dolor nesciunt nisi nemo illo. Maxime consequatur minus perspiciatis a.'
                        },
                    ],
                },
                {
                    title: 'Main course',
                    dishes: [
                        {
                            'name': 'Braised abalone',
                            'price': 52,
                            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!'
                        },
                        {
                            'name': 'Twice cooked pork',
                            'price': 21,
                            'description': 'Recusandae porro iure molestiae totam maiores, reprehenderit mollitia unde eaque facere maxime.'
                        },
                        {
                            'name': 'Kung pao chicken',
                            'price': 32,
                            'description': 'Quos incidunt, praesentium facere dolores distinctio fuga, ipsum quis voluptatem.'
                        },
                        {
                            'name': 'Char siu & sushis',
                            'price': 48,
                            'description': 'Sapiente provident dolor nesciunt nisi nemo illo. Maxime consequatur minus perspiciatis a.'
                        },
                    ],

                },
                {
                    title: 'Desserts',
                    dishes: [
                        {
                            'name': 'Chocolate ball cake',
                            'price': 13,
                            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore ex veniam!'
                        },
                        {
                            'name': 'Lime pie with crust',
                            'price': 21,
                            'description': 'Recusandae porro iure molestiae totam maiores, reprehenderit mollitia unde eaque facere maxime.'
                        },
                        {
                            'name': 'Rasberry pear cake',
                            'price': 18,
                            'description': 'Quos incidunt, praesentium facere dolores distinctio fuga, ipsum quis voluptatem.'
                        },
                        {
                            'name': 'Café au lait',
                            'price': 6,
                            'description': 'Sapiente provident dolor nesciunt nisi nemo illo. Maxime consequatur minus perspiciatis a.'
                        },
                    ],

                },
            ]
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
@import '../assets/scss/partials/_critics.scss';
.promo {
    background-color: $white-color;
    text-align: center;
    margin-bottom: 2em;
    .promo-title {
        @include font(2em, 400, unset, $tundora-color);
        margin: 3em 0;
    }
    .promo-cards {
        @include flex(space-around, start, wrap);
    }
}
.menus {
    background-color: $white-color;
    margin-top: 8em;
    margin-bottom: 8em;
    .menu-cards {
        @include flex(center, center, wrap);
    }
}
@import '../assets/scss/partials/_fsBannerBottom.scss';
</style>