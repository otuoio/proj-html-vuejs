<template>
    <div class="col col-30">
        <img :src="require(`../assets/img/${card.picture}`)" :alt="card.picture">
        <h4 class="cta-title">{{ card.title }}</h4>
        <hr>
        <p class="cta-description">{{ card.description }}</p>
        <button class="btn cta-btn">{{ card.button }}</button>
    </div>
</template>

<script>
export default {
    name: 'CallToActionBox',
    props: {
        card: {
            type: Object
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_mixins.scss';

@import '../assets/scss/partials/_cta-box.scss';
</style>