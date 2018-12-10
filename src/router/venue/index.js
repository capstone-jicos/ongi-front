import Header from "../../layout/Header";

import VenueInfo from "../../views/venues/VenueInfo";
import VenueReqFooter from "../../views/venues/VenueReqFooter";

export default [
  {
    path: "/venue/confirm",
    name: "venue-requestconfirm",
    components: {
      header: Header,
      default: () => import("../../views/venues/Confirm")
    }
  },
  {
    path: "/venue/:id/request",
    name: "venue-request",
    components: {
      header: Header,
      default: () => import("../../views/venues/Request")
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
      default: () => import("../../views/venues/VenueList")
    }
  }
];
