import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      contents: null,
    };
  },
  getters: {
    contents(state) {
      return state.contents;
    },
  },
  mutations: {
    contents(state, value) {
      state.contents = value;
    },
  },
  actions: {
    contents(context, value) {
      context.commit("contents", value);
    },
  },
});

export default store;
