<template>
  <header>
      <!-- header bar logo menu -->
      <div class="header-top">
          <div class="col-40 logo">
              <img src="../assets/img/logo-restaurant-2x-300x58.png" alt="Avada Restaurant">
          </div>
          <nav class="col-60 nav-menu">
              <ul class="menu-inline">
                <li v-for="(item, index) in menuItems" 
                :key="index">
                    <a :href="item.url">
                        {{item.name}}
                        <font-awesome-icon v-if="item.icon" :icon="item.icon" />
                        <span v-if="item.tag" class="menu-tag">{{ item.tag }}</span>
                    </a>
                </li>
              </ul>
          </nav>
      </div>
      <!-- /header bar logo menu -->
      <!-- banner-box -->
      <div class="banner-box">
          <InfoBox class="col-40" />   
          <div class="img-box col-60">
            <img src="../assets/img/slider52x.jpg" alt="slider52x">
          </div>
      </div>
      <!-- /banner-box -->
      <!-- tags -->
    <div class="tag demos"><font-awesome-icon icon="share-alt" class="demos-icon"/><span>Demos</span></div>
        <div class="tag sales">
            <span class="price">
                <span class="currency">&#36;</span>
                <span class="number">39</span>
            </span>
            <span class="onsale">On Sale</span>
    </div>
      <!-- /tags -->
  </header>
</template>

<script>
import InfoBox from './InfoBox.vue';

export default {
    name: 'Header',
    components: {
        InfoBox
    },
    data() {
        return {
           menuItems: [
               {
                   name: 'Home',
                   url: '#',
                   tag: '',
                   icon: ''
               },
               {
                   name: 'Culinary History',
                   url: '#',
                   tag: '',
                   icon: ''
               },
               {
                   name: 'Our Team',
                   url: '#',
                   tag: '',
                   icon: ''
               },
               {
                   name: 'Our Menu',
                   url: '#',
                   tag: '',
                   icon: ''
               },
               {
                   name: 'Takeout',
                   url: '#',
                   tag: 'New',
                   icon: ''
               },
               {
                   name: 'Bulletin',
                   url: '#',
                   tag: '',
                   icon: ''
               },
               {
                   name: 'Reservation',
                   url: '#',
                   tag: '',
                   icon: ''
               },
               {
                   name: '',
                   url: '#',
                   tag: '',
                   icon: 'shopping-cart'
               },
           ], 
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_mixins.scss';

header {
    position: relative;
    .header-top {
        @include absolute_l(0, 0);
        z-index: 99;
        width: 100%;
        height: 100px;
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
                .menu-tag {
                    display: inline-block;
                    border: 1px solid $silver-color;
                    padding: .5em 1em;
                    font-size: .7em;
                }
            }
        }
    }
    .tag {
        width: 85px;
        height: 85px;
        background-color: $white-color;
        @include flex(space-around, center, wrap);
        flex-direction: column;
        padding: 1em;
        border-radius: .5em;
        }
    .demos {
        @include absolute_r(20vh, 1em);
        .demos-icon {
            display: block;
            @include font(1em, 300, unset, $tundora-color);
            margin-bottom: .2em;
        }
        span {
            @include font(.7em, 300, unset, $tundora-color);
        }
    }
    .sales {
        @include absolute_r(32vh, 1em);
        .price .currency {
            @include font(.7em, 600, unset, $christi-color);
            position: relative;
            right: .1em;
            bottom: .6em;
        }
        .price .number {
            @include font(1em, 600, unset, $christi-color);
        }
        .onsale {
            @include font(.7em, 300, unset, $tundora-color);
        }
    }
    .banner-box {
        @include flex(flex-start, flex-start, wrap);
        overflow: hidden;
        height: 1000px;
        @import '../assets/scss/partials/_img-box.scss';
        img {
            filter: brightness(0.7);
        }
    }
}
</style>