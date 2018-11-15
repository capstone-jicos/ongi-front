import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/Header";

import CreateEvent from "./event-create";

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
      path: "/confirm",
      name: "confirm",
      components: {
        header: Header,
        default: () => import("./views/Confirm")
      }
    },
    {
      path: "/event/request",
      name: "request",
      components: {
        header: Header,
        default: () => import("./views/events/Request")
      }
    },
    {
      path: "/event/create",
      redirect : "/event/create/type",
      name: "BasicInfo",
      components: {
        header: Header,
        default: () => import("./views/events/create/Index")
      },
      children: CreateEvent
    },
    {
      path: "/event",
      name: "event-list",
      components: {
        header: Header,
        default: () => import("./views/events/List")
      }
    },
    {
      path: "/event/",
      name: "event-info",
      components: {
        header: Header,
        default: () => import("./views/events/Info")
      }
    }
  ]
});
