import Vue from "vue";
import Vuex from "vuex";

import eventLocation from "./event-location";
import createVenueModule from "./create-venue";
import createEventModule from "./create-event";
import userInfo from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    location: eventLocation,
    createVenue: createVenueModule,
    createEvent: createEventModule,
    user: userInfo
  }
});
