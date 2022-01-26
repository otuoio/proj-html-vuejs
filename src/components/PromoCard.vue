<template>
    <div class="promo-card col-30">
        <div class="promo-picture">
            <img :src="require(`../assets/img/${card.picture}`)" :alt="card.title">
            <div class="promo-hover-credits">
                <font-awesome-icon :icon="card.icon" class="promo-hover-icon"/>
                <h4 class="promo-hover-title">{{ card.title }}</h4>
                <p class="promo-hover-categories">{{ card.categories }}</p>
            </div>
        </div>
        <h4 class="promo-card-title">{{ card.title }}</h4>
        <div class="promo-credits">
            <p class="promo-card-author">By {{ card.author }}</p>
            <p class="promo-card-date">{{ card.date }}</p>
            <p class="promo-card-categories">Categories: {{ card.categories }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PromoCard',
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

@import '../assets/scss/partials/_promoCard.scss';
</style>