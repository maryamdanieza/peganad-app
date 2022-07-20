import { createStore } from "vuex";
import downloadContent from "../services/download-content.service";

const store = createStore({
  state() {
    return {
      isHide: true,
      gamePreferences: {},
      progress: {
        animals: 0
      }
    }
  },
  getters: {
    // isHide(state) {
    //   return state.isHide;
    // },
      },
  mutations: {
    isHide(state, value) {
      state.isHide = value;
    },
    gamePreferences(state, value) {
      state.gamePreferences = value;
    },
    progress(state, value) {
      state.progress[value.category] = value.status;
    }
  },
  actions: {
    isHide(context, value) {
      context.commit("isHide", value);
    },
    startDownload(context) {
      downloadContent.downloadContent((status)=> {
        //status = { category, percentage, payload }
        context.commit('progress', status);
        downloadContent.updateContent(status.payload)
      });
      
    }
  },
});

export default store;
