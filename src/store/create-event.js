export default {
  namespaced: true,
  state: {
    event: {
      title: null,
      description: null,
      people: null,
      feeAmount: null,
      date: null,
      startTime: null,
      finishTime: null,
      foods: []
    }
    //address는 제외
  },
  getters: {
    getResponse: state => {
      return state.event;
    }
  },
  mutations: {
    setPartialResponse: (state, payload) => {
      let keys = Object.keys(payload);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        state.event[key] = payload[key];
      }
    }
  },
  actions: {
    setPartialResponse: ({ commit }, payload) => {
      commit("setPartialResponse", payload);
    }
  }
};
