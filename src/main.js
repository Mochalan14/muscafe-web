import Vue from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import * as TastyBurgerButton from "vue-tasty-burgers";

Vue.use(TastyBurgerButton);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
