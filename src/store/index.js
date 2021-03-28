import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      contents: {},
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
      console.log(state.contents);
    },
  },
  actions: {
    contents(context, value) {
      context.commit("contents", value);
    },
  },
});

export default store;
