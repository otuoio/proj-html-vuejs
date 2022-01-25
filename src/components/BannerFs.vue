<template>
    <div class="fs-banner">
        <img src="../assets/img/page52x.jpg" alt="page52x">
        <span class="img-text">Kung Pao Chicken - &dollar;32</span>
    </div>
</template>

<script>
export default {
    name: 'BannerFs'
}
</script>

<style lang="scss">
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_mixins.scss';

.fs-banner {
    height: 100%;
    position: relative;
    margin: 4em 0;
    img {
        filter: brightness(0.8);
        width: 100%;
        height: 100%;
        }
    .img-text {
        @include font(1em, 500, uppercase, $white-color);
        @include absolute_l(95%, 50%);
        transform: translate(-50%, -50%);
    }
}
</style>