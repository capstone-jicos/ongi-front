import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Argon from "./plugins/argon-kit";
import xeicon from "xeicon";
import axios from "axios";
import wysiwyg from "vue-wysiwyg";
import * as VueGoogleMaps from "vue2-google-maps";
import { config } from "../package";

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(Vuex);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB3EVY_AnKS8qGZXld76jqouKwavnEl57A"
  }
});
Vue.use(xeicon);
Vue.use(wysiwyg, {
  hideModules: {
    image: true,
    table: true,
    separator: true,
    link: true,
    code: true
  }
});

axios.defaults.baseURL = config.endpoint[process.env.NODE_ENV];
Vue.prototype.$axios = axios;
Vue.prototype.$scrollToTop = () => {
  window.scrollTo(0, 0);
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
