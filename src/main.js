import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Argon from "./plugins/argon-kit";
import xeicon from "xeicon";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(Vuex);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB3EVY_AnKS8qGZXld76jqouKwavnEl57A"
  }
});
Vue.use(xeicon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
