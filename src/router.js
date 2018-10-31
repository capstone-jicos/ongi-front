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
      name: "login",
      components: {
        header: Header,
        default: () => import("./views/Login")
      }
    },
    {
      path: "/event",
      name: "event-list",
      components: {
        header: Header,
        default: () => import("./views/events/List"),
        footer: Footer
      }
    },
    {
      path: "/event/:id",
      name: "event-info",
      components: {
        header: Header,
        default: () => import("./views/events/Info")
      }
    }
  ]
});
