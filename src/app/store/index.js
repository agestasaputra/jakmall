import Vue from "vue";
import Vuex from "vuex";
import landing from "./modules/landing";
import about from "./modules/about";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    landing,
    about
  }
});
