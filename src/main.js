import Vue from "vue";
import App from "./App.vue";
import { router } from "@/config/routes";
import store from "@/app/store";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
