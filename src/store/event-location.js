export default {
  namespaced: true,
  state: {
    state: "서울특별시",
    city: "광진구"
  },
  getters: {
    getLocationForEventList: state => {
      return state;
    }
  },
  // Action과 Mutation을 따로 둔 이유?
  // Shared Resource라서 그런가?
  mutations: {
    setLocationForEventList: (state, payload) => {
      let keys = Object.keys(this.state);
      for (let i = 0; i < keys.length; i++) {
        state[keys[i]] = payload[keys[i]];
      }
    }
  },
  actions: {
    setLocationForEventList: ({ commit }, payload) => {
      commit("setLocationForEventList", payload);
    }
  }
};
