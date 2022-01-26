<template>
    <div class="menu-card">
        <div class="menu-card-container">
            <h2 class="menu-card-title">{{ card.title }}</h2>
            <div class="menu-card-dishes">
                <div v-for="(dish, index) in card.dishes"
                    :key="index"
                    class="menu-card-dish">
                    <div class="menu-card-dish-title">
                        <h4 class="menu-card-dish-name">{{ dish.name }}</h4>
                        <span class="menu-card-dish-price">&dollar;{{ dish.price }}</span>
                    </div>
                    <p class="menu-card-dish-description">{{ dish.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuCard',
    props: {
        card: {
            type: Object
        }
    },
}
</script>

<style lang="scss">
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_mixins.scss';
@import '../assets/scss/partials/_menuCard.scss';
</style>