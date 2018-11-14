export default {
  namespaced: true,
  state: {
    response: {
      type: null,
      accommodate: null,
      location: {
        country: null,
        state: null,
        city: null,
        detailAddress: null,
        coordinates: {
          lat: null,
          lng: null
        }
      },
      amenities: [],
      requirements: [],
      photoUrl: null, // 업로드를 따로 해두는게 맞을까??
      name: null,
      rules: null
    }
  },
  getters: {
    getResponse: state => {
      return state.response;
    }
  },
  mutations: {
    setPartialResponse: (state, payload) => {
      let keys = Object.keys(payload);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        state.response[key] = payload[key];
      }
    }
  },
  actions: {
    setPartialResponse: ({ commit }, payload) => {
      commit("setPartialResponse", payload);
    }
  }
};
