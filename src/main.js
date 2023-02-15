import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/main.css";
import "@/assets/css/media-query.css";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import CountryFlag from "vue-country-flag";
Vue.component("country-flag", CountryFlag);

import { Icon } from "@iconify/vue2";
Vue.component("i-icon", Icon);

import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax, {
  // options here
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
