import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(Vuex);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB3EVY_AnKS8qGZXld76jqouKwavnEl57A"
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
