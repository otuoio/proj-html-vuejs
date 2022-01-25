<template>
    <div class="info-box col-40">
        <div class="col-20">
            <hr>
        </div>
        <div class="col-80 card">
            <h5 class="card-subtitle">{{ obj.subtitle }}</h5>
            <h1 class="card-title">{{ obj.title }}</h1>
            <p class="card-description">{{ obj.description }}</p>
            <button class="btn card-btn">
                <font-awesome-icon v-if="obj.icon" :icon="obj.icon" class="icon" />
                {{ obj.button }}
            </button>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'InfoBox',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/partials/_variables.scss';
@import '../assets/scss/partials/_mixins.scss';
@import '../assets/scss/partials/_info-box.scss';

</style>