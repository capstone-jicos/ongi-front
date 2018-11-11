import Vue from "vue";
import Router from "vue-router";
import Header from "../layout/Header";

import CreateVenue from "./venue-create";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      components: {
        header: Header,
        default: () => import("../views/Login")
      }
    },
    {
      path: "/event",
      name: "event-list",
      components: {
        header: Header,
        default: () => import("../views/events/List")
      }
    },
    {
      path: "/event/:id",
      name: "event-info",
      components: {
        header: Header,
        default: () => import("../views/events/Info")
      }
    },
    {
      path: "/my/venue",
      components: {
        header: Header,
        default: () => import("../views/provider/List")
      }
    },
    {
      path: "/my/venue/create",
      redirect: "/my/venue/create/type",
      components: {
        header: Header,
        default: () => import("../views/provider/create/Index")
      },
      children: CreateVenue
    }
  ]
});
