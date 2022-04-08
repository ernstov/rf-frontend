//Managing Storage in local stoarge

const StorageService = {
	getData(key) {
		return localStorage.getItem(key)
	},

	saveData(key, data) {
		localStorage.setItem(key, data)
	},
	removeData(key) {
		localStorage.removeItem(key)
	},
	getToken() {
		return localStorage.getItem('access')
	},
	setToken(token) {
		localStorage.setItem('access', token)
	},
	setRefreshToken(token) {
		localStorage.setItem('refresh', token)
	},
	getRefreshToken() {
		return localStorage.getItem('refresh')
	},
}

export default StorageService
