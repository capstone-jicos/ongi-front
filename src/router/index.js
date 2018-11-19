import Vue from "vue";
import Router from "vue-router";
import Header from "../layout/Header";

import CreateVenue from "./create-venue";
import CreateEVent from "./create-event";

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
      path: "/event/request",
      name: "request",
      components: {
        header: Header,
        default: () => import("../views/events/Request")
      }
    },
    {
      path: "/event/create",
      redirect: "/event/create/baseinfo",
      components: {
        header: Header,
        default: () => import("../views/events/create/Index")
      },
      children: CreateEVent
    },
    {
      path: "/event/create/Confirm",
      name: "confirm",
      components: {
        header: Header,
        default: () => import("../views/events/create/Confirm")
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
    // 내 장소 정보 + 장소제공 요청리스트 확인용 router주소
    {
      path: "/venue/:id",
      components: {
        header: Header,
        default: () => import("../views/myPage/Venue")
      }
    },
    {
      path: "/hosted",
      components: {
        header: Header,
        default: () => import("../views/myPage/Hosted")
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
