<template>
  <div id="app">
    <Header 
    :banner="bannerBox"
    />
    <Main 
    :banner="bannerBox"
    />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      bannerBox: [
        {
          title: 'Fine dining experience',
          subtitle: 'The best table in town',
          description: 'Temporibus doloribus iure culpa iste illo dolorum mollitia atque deleniti pariatur soluta. Praesentium doloremque nostrum, dicta libero nobis assumenda voluptas.',
          button: 'Explore the menu',
          poster: 'slider52x.jpg',
          icon: ''
        },
        {
          title: 'The best table in town',
          subtitle: 'Fine dining experience',
          description: 'Temporibus doloribus iure culpa iste illo dolorum mollitia atque deleniti pariatur soluta. Praesentium doloremque nostrum, dicta libero nobis assumenda voluptas.',
          button: 'Explore the menu',
          poster: 'slider32x.jpg',
          icon: ''
        },
        {
          title: 'Takeout now available',
          subtitle: 'Enjoy your meal at home',
          description: 'Temporibus doloribus iure culpa iste illo dolorum mollitia atque deleniti pariatur soluta. Praesentium doloremque nostrum, dicta libero nobis assumenda voluptas.',
          button: 'View takeout menu',
          poster: 'slider72x-scaled.jpg',
          icon: 'car'
        },
      ]
    }
  }
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';

</style>
