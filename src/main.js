import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import AOS from "aos";
import "aos/dist/aos.css";

import "@/assets/css/main.css";
import "@/assets/css/media-query.css";
Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import CountryFlag from "vue-country-flag";
Vue.component("country-flag", CountryFlag);

import "toastify-js/src/toastify.css";

// Vue.use(toastify);

// vue-sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2, {
  // confirmButtonColor: "#41b882",
  // cancelButtonColor: "#ff7674",
  reverseButtons: false,
  buttonsStyling: false,
  customClass: {
    confirmButton: "btn btn-primary mx-2",
    cancelButton: "btn btn-secondary mx-2",
  },
});


// Vee Validate
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
// import { required, email } from 'vee-validate/dist/rules';
import { messages } from "vee-validate/dist/locale/en.json";
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

extend("username", {
  validate: value => {
    let regex = RegExp("^((?!-)*)([A-Za-z0-9-]+)((?!-)*)$");
    return regex.test(value);
  },
  message:
    "The {_field_} field may contain alpha-numeric characters as well as dashes."
});
extend("internal_identifier", {
  validate: value => {
    let regex = RegExp("^((?!-)*)([A-Za-z0-9-]+)((?!-)*)$");
    return regex.test(value);
  },
  message:
    "The {_field_} field may contain alpha-numeric characters as well as dashes."
});
Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);

import { Icon } from "@iconify/vue2";
Vue.component("i-icon", Icon);

import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax, {
  // options here
});

// Animated Number
import AnimatedNumber from "animated-number-vue";
// Vue.use(AnimatedNumber);
Vue.component("AnimatedNumber", AnimatedNumber);

new Vue({
  router,
  store,
  mounted() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
