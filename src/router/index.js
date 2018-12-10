import Vue from "vue";
import Router from "vue-router";
import Header from "../layout/Header";
import Main from "../views/Main";
import Join from "../views/Join";
import NotFound from "../views/NotFound";

import EventRouter from "./event";
import MyPageRouter from "./my-page";
import VenueRouter from "./venue";
import BackFooter from "../views/terms/backFooter";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "main",
    components: {
      header: Header,
      default: Main
    }
  },
  {
    path: "/join",
    name: "join",
    components: {
      header: Header,
      default: Join
    }
  },
  {
    path: "/login",
    name: "login",
    components: {
      header: Header,
      default: () => import("../views/Login")
    }
  },
  {
    path: "/terms/guest",
    name: "guest-terms",
    components: {
      header: Header,
      default: () => import("../views/terms/guest"),
      footer: BackFooter
    }
  },
  {
    path: "/terms/host",
    name: "host-terms",
    components: {
      header: Header,
      default: () => import("../views/terms/host"),
      footer: BackFooter
    }
  },
  {
    path: "/terms/provider",
    name: "provider-terms",
    components: {
      header: Header,
      default: () => import("../views/terms/provider"),
      footer: BackFooter
    }
  },
  {
    path: "/terms/privacy",
    name: "privacy-terms",
    components: {
      header: Header,
      default: () => import("../views/terms/privacy"),
      footer: BackFooter
    }
  }
]
  .concat(EventRouter)
  .concat(MyPageRouter)
  .concat(VenueRouter)
  .concat([
    {
      path: "*",
      name: "404",
      components: {
        header: Header,
        default: NotFound
      }
    }
  ]);

export default new Router({
  mode: "history",
  routes: routes
});
