<template>
    <div class="critics-card">
        <h4 class="critics-name">{{ card.name}}</h4>
        <h2 class="critics-cardtitle">{{ card.magazine }}</h2>
        <div class="vote">
            <font-awesome-icon v-for="i in card.vote"
            :key="i"
            icon="star" class="star"/>
        </div>
        <hr>
        <p class="critics-description">{{ card.review }}</p>
        <button class="btn critics-btn">{{ card.button }}</button>
    </div>
</template>

<script>
export default {
    name: 'CriticsCard',
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
@import '../assets/scss/partials/_criticsCard.scss';
</style>