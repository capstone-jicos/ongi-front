import Vue from "vue";
import Router from "vue-router";
import Header from "../layout/Header";
import Main from "../views/Main";
import Join from "../views/Join";

import CreateVenue from "./create-venue";
import CreateEVent from "./create-event";
import EventInfo from "../views/events/Info";
import VenueInfo from "../views/venues/VenueInfo";

import confirmFooter from "../views/events/create/ConfirmFooter";
import RequestFooter from "../views/events/RequestFooter";
import VenueReqFooter from "../views/venues/VenueReqFooter";
import AttendeeFooter from "../views/myPage/Venue";
import ProviderAnswerFooter from "../views/myPage/HostWaitList";
import VenuePickFooter from "../views/events/create/MyvenuePick";

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
      path: "/event/:id/request/Confirm",
      name: "requestConfirm",
      components: {
        header: Header,
        default: () => import("../views/events/RequestConfirm")
      }
    },
    {
      path: "/event/:id/request",
      name: "request",
      components: {
        header: Header,
        default: () => import("../views/events/Request")
      }
    },
    {
      path: "/event/create/setvenue/my/venue/:id",
      name: "setvenue",
      components: {
        header: Header,
        default: VenueInfo,
        footer: VenuePickFooter
      }
    },
    {
      path: "/event/create/setvenue",
      name: "setvenue",
      components: {
        header: Header,
        default: () => import("../views/events/create/SetVenue")
      }
    },
    {
      path: "/event/create/Confirm",
      name: "confirm",
      components: {
        header: Header,
        default: () => import("../views/events/create/Confirm"),
        footer: confirmFooter
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
        default: EventInfo,
        footer: RequestFooter
      }
    },
    {
      path: "/venue/confirm",
      name: "venue-requestconfirm",
      components: {
        header: Header,
        default: () => import("../views/venues/Confirm")
      }
    },
    {
      path: "/venue/:id",
      name: "venue-info",
      components: {
        header: Header,
        default: VenueInfo,
        footer: VenueReqFooter
      }
    },
    {
      path: "/venue",
      name: "venue-list",
      components: {
        header: Header,
        default: () => import("../views/venues/VenueList")
      }
    },
    {
      path: "/my/InfoUpdate",
      name: "InfoUpdate",
      components: {
        header: Header,
        default: () => import("../views/myPage/MyInfoUpdate")
      }
    },
    {
      path: "/my/hosted",
      name: "hostedEvent-list",
      components: {
        header: Header,
        default: () => import("../views/myPage/Hosted")
      }
    },
    {
      path: "/my/hosted/event/:id",
      name: "hosted-event-info",
      components: {
        header: Header,
        default: EventInfo,
        footer: () => import("../views/myPage/HostedInfo")
      }
    },
    {
      path: "/my/attended/event/:id",
      name: "attended",
      components: {
        header: Header,
        default: EventInfo
      }
    },
    {
      path: "/my/attended",
      name: "attended",
      components: {
        header: Header,
        default: () => import("../views/myPage/Attended")
      }
    },
    {
      path: "/my/venue/create/complete",
      components: {
        header: Header,
        default: () => import("../views/provider/create/Complete")
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
      path: "/my/venue/event/:id",
      components: {
        header: Header,
        default: EventInfo,
        footer: ProviderAnswerFooter
      }
    },
    {
      path: "/my/venue/:id",
      components: {
        header: Header,
        default: VenueInfo,
        footer: AttendeeFooter
      }
    },
    {
      path: "/my/venue",
      components: {
        header: Header,
        default: () => import("../views/provider/List")
      }
    }
  ]
});
