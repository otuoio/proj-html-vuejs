import Vue from "vue";
import App from "./App.vue";

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(fas, fab);
library.add(faShoppingCart, faShareAlt, faStar, faCar, faAngleUp, faLink);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
