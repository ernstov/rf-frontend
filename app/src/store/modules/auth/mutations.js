export default {
  setUser(state, email) {
    state.user = email;
  },
  logoutUser(state) {
    state.user = null;
  },
};
