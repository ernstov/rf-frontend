export default {
	setUser(state, payload) {
		state.user = payload
	},
	logoutUser(state) {
		state.user = null
	},
}
