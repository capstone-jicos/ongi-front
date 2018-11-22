import Vue from "vue";
import Router from "vue-router";
import Header from "../layout/Header";
import Main from "../views/Main";
import Join from "../views/Join";

import CreateVenue from "./create-venue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
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
      path: "/confirm",
      name: "confirm",
      components: {
        header: Header,
        default: () => import("../views/Confirm")
      }
    },
    {
      path: "/event/request",
      name: "request",
      components: {
        header: Header,
        default: () => import("../views/events/Request")
      }
    },
    {
      path: "/event/create/SetVenue",
      name: "SetVenue",
      components: {
        header: Header,
        default: () => import("../views/events/create/SetVenue")
      }
    },
    {
      path: "/event/create/middlecheck",
      name: "middlecheck",
      components: {
        header: Header,
        default: () => import("../views/events/create/MiddleCheck")
      }
    },
    {
      path: "/event/create/food",
      name: "food",
      components: {
        header: Header,
        default: () => import("../views/events/create/Food")
      }
    },
    {
      path: "/event/create",
      name: "BasicInfo",
      components: {
        header: Header,
        default: () => import("../views/events/create/BasicInfo")
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
    },
    {
      path: "/my/venue/create/complete",
      components: {
        header: Header,
        default: () => import("../views/provider/create/Complete")
      }
    }
  ]
});
