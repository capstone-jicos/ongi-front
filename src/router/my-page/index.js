import CreateVenue from "../venue/create";

import Header from "../../layout/Header";
import EventInfo from "../../views/events/Info";
import VenueInfo from "../../views/venues/VenueInfo";

import AttendeeFooter from "../../views/myPage/Venue";
import ProviderAnswerFooter from "../../views/myPage/HostWaitList";

export default [
  {
    path: "/my/InfoUpdate",
    name: "InfoUpdate",
    components: {
      header: Header,
      default: () => import("../../views/myPage/MyInfoUpdate")
    }
  },
  {
    path: "/my/hosted",
    name: "hostedEvent-list",
    components: {
      header: Header,
      default: () => import("../../views/myPage/Hosted")
    }
  },
  {
    path: "/my/hosted/event/:id",
    name: "hosted-event-info",
    components: {
      header: Header,
      default: EventInfo,
      footer: () => import("../../views/myPage/HostedInfo")
    }
  },
  {
    path: "/my/attended/event/:id",
    name: "attended-event",
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
      default: () => import("../../views/myPage/Attended")
    }
  },
  {
    path: "/my/venue/create/complete",
    components: {
      header: Header,
      default: () => import("../../views/provider/create/Complete")
    }
  },
  {
    path: "/my/venue/create",
    redirect: "/my/venue/create/type",
    components: {
      header: Header,
      default: () => import("../../views/provider/create/Index")
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
      default: () => import("../../views/provider/List")
    }
  }
];
