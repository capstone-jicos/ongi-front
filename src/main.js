import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(Vuex);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
