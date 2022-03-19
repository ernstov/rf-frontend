import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

const authModule = {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  actions,
  mutations,
  getters,
};

export default authModule;
