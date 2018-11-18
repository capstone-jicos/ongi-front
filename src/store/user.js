export default {
  namespaced: true,
  state: {
    city: null,
    country: null,
    displayName: null,
    gender: null,
    profileImage: null,
    state: null,
    uniqueId: null
  },
  getters: {
    getUserInfo: state => {
      return state;
    }
  },
  mutations: {
    setUserInfo: (state, payload) => {
      let keys = Object.keys(state);
      for (let i = 0; i < keys.length; i++) {
        state[keys[i]] = payload[keys[i]];
      }
    }
  },
  actions: {
    setUserInfo: ({ commit }, payload) => {
      commit("setUserInfo", payload);
    }
  }
};
