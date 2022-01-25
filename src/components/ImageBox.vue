<template>
    <div class="img-box col-60">
        <img :src="require(`../assets/img/${obj.poster}`)" :alt="obj.title">
    </div>
</template>

<script>
export default {
    name: 'ImageBox',
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
@import '../assets/scss/partials/_img-box.scss';
</style>