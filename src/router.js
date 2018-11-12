import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/Header";

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
    path: "/event/create/SetVenue",
    name: "SetVenue",
    components: {
      header: Header,
      default: () => import("./views/events/create/SetVenue")
    }
  },
    {
      path: "/event/create/middlecheck",
      name: "middlecheck",
      components: {
        header: Header,
        default: () => import("./views/events/create/MiddleCheck")
      }
    },
    {
      path: "/event/create/food",
      name: "food",
      components: {
        header: Header,
        default: () => import("./views/events/create/Food")
      }
    },
    {
      path: "/event/create",
      name: "BasicInfo",
      components: {
        header: Header,
        default: () => import("./views/events/create/BasicInfo")
      }
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
      path: "/event/:id",
      name: "event-info",
      components: {
        header: Header,
        default: () => import("./views/events/Info")
      }
    }
  ]
});
