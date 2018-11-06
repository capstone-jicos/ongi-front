import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventList: {
      location: undefined
    }
  },
  getters: {
    getLocationForEventList: state => {
      return state.eventList.location;
    }
  },
  // Action과 Mutation을 따로 둔 이유?
  // Shared Resource라서 그런가?
  mutations: {
    setLocationForEventList: (state, payload) => {
      state.eventList.location = payload;
    }
  },
  actions: {
    setLocationForEventList: ({ commit }, payload) => {
      commit("setLocationForEventList", payload);
    }
  }
});
