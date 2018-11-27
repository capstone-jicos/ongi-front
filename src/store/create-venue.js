export default {
  namespaced: true,
  state: {
    response: {
      venueId:null,
      type: null,
      location: {
        country: null,
        state: null,
        city: null,
        detailAddress: null,
        coordinates: {
          lat: 0,
          lng: 0
        }
      },
      amenities: [],
      requirements: [],
      restrictions: [],
      photoUrl: null, // 업로드를 따로 해두는게 맞을까??
      name: null
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
    },
    setLocation: (state, payload) => {
      let keys = Object.keys(payload);
      for (let i = 0; i < keys.length; i++) {
        state.response.location[keys[i]] = payload[keys[i]];
      }
    }
  },
  actions: {
    setPartialResponse: ({ commit }, payload) => {
      commit("setPartialResponse", payload);
    },
    setLocation: ({ commit }, payload) => {
      commit("setLocation", payload);
    }
  }
};
