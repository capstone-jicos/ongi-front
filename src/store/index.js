import Vue from "vue";
import Vuex from "vuex";

import eventLocation from "./event-location";
import createVenueModule from "./create-venue";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    location: eventLocation,
    createVenue: createVenueModule
  }
});
