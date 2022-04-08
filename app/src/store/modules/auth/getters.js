export default {
	isAuthenticated: (state) => !!state.user,
	getUser: (state) => state.user,
}
