export default {
	isAuthenticated: (state) => state.user && state.user.id ? true: false,
	getUser: (state) => state.user,
}
