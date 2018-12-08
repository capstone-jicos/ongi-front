import CreateEvent from "./create";

import Header from "../../layout/Header";

import EventInfo from "../../views/events/Info";
import VenueInfo from "../../views/venues/VenueInfo";

import RequestFooter from "../../views/events/RequestFooter";
import VenuePickFooter from "../../views/events/create/MyvenuePick";
import ConfirmFooter from "../../views/events/create/ConfirmFooter";

export default [
  {
    path: "/event/create/setvenue/my/venue/:id",
    name: "setvenue-myvenue",
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
      default: () => import("../../views/events/create/SetVenue")
    }
  },
  {
    path: "/event/create/Confirm",
    name: "confirm",
    components: {
      header: Header,
      default: () => import("../../views/events/create/Confirm"),
      footer: ConfirmFooter
    }
  },
  {
    path: "/event/create",
    redirect: "/event/create/baseinfo",
    components: {
      header: Header,
      default: () => import("../../views/events/create/Index")
    },
    children: CreateEvent
  },
  {
    path: "/event/:id/request/Confirm",
    name: "requestConfirm",
    components: {
      header: Header,
      default: () => import("../../views/events/RequestConfirm")
    }
  },
  {
    path: "/event/:id/request",
    name: "request",
    components: {
      header: Header,
      default: () => import("../../views/events/Request")
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
    path: "/event",
    name: "event-list",
    components: {
      header: Header,
      default: () => import("../../views/events/List")
    }
  }
];
