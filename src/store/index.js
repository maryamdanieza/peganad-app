import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isHide: true,
    };
  },
  getters: {
    isHide(state) {
      return state.isHide;
    },
  },
  mutations: {
    isHide(state, value) {
      state.isHide = value;
      console.log(state.isHide);
    },
  },
  actions: {
    isHide(context, value) {
      context.commit("isHide", value);
    },
  },
});

export default store;
