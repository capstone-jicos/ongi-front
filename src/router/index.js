import Vue from "vue";
import Router from "vue-router";
import Header from "../layout/Header";
import Main from "../views/Main";
import Join from "../views/Join";

import EventRouter from "./event";
import MyPageRouter from "./my-page";
import VenueRouter from "./venue";

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
  }
]
  .concat(EventRouter)
  .concat(MyPageRouter)
  .concat(VenueRouter);

export default new Router({
  mode: "history",
  routes: routes
});
