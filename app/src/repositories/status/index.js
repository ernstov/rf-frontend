import ApiService from '../../services/api'

export const StatusRepository = {
	async search(query) {
		return await ApiService.get(`/status/?search=${query}`)
	},

	async create(payload) {
		return await ApiService.post('/status/', payload)
	},
}
