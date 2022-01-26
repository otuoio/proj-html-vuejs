<template>
  <footer>
      <div class="footer-top">
        <div class="footer-info container-30">
            <div class="logo">
                <img src="../assets/img/logo-restaurant.png" alt="logo-restaurant">
            </div>
            <p class="disclaim">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, consequatur aperiam. Mollitia, nostrum? Accusamus, voluptatem alias..</p>
            <div class="social">
                <ul class="menu-inline">
                    <li v-for="i in social"
                    :key="i"
                    ><a href="#"><span class="social-tag">{{ i.icon }}</span></a></li>
                </ul>
            </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">Copyright 2012 - 2019 Avada | All Rights Reserved | Powered by <b>Wordpress | ThemeFusion</b></p>
        <span class="arrow-up"><font-awesome-icon icon="angle-up" /></span>
      </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            social: [
                {
                    name: 'Facebook',
                    icon: 'f'
                },
                {
                    name: 'twitter',
                    icon: 'T'
                },
                {
                    name: 'YouTube',
                    icon: 'YT'
                },
                {
                    name: 'Instagram',
                    icon: 'I'
                },
                {
                    name: 'Linkedin',
                    icon: 'in'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_mixins.scss';

.footer-top {
    background-image: url('../assets/img/footer2x.jpg');
    background-size: cover;
    background-position: center;
    padding: 8em 0;
    text-align: center;
    img {
        width: 50%;
    }
    .disclaim {
        @include font(1em, 400, unset, $silver-color);
    }
    .logo,
    .disclaim,
    .social {
        margin-bottom: 3em;
    }
    .social {
        .social-tag {
            display: inline-block;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: $white-color;
            border-radius: 50%;
            color: $black-color;
            margin: 0 .5em;
        }
    }
}
.footer-bottom {
    background-color: $black-color;
    @include flex(center, center, wrap);
    padding: 1em 0;
    position: relative;
    p {
        @include font(.7em, 400, unset, $silver-color);
    }
    .arrow-up {
        display: inline-block;
            width: 30px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            background-color: $tundora-color;
            border-bottom: 1px solid $silver-color;
            color: $white-color;
            font-size: .8em;
            @include absolute_r(100%, 5%);
            transform: translate(0, -100%);
    }
}
</style>