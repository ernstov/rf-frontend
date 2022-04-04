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
}

export default StorageService
