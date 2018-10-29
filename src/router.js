import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "starter",
      components: {
        header: Header,
        default: () => import("./views/Login"),
        footer: Footer
      }
    },
    {
      path: "/event",
      name: "event",
      components: {
        header: Header,
        default: () => import("./views/events/Info"),
        footer: Footer
      }
    }
  ]
});
