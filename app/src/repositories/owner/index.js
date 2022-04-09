import ApiService from '../../services/api'

export const OwnerRepository = {
	async search(query) {
		return await ApiService.get(`/owner?search=${query}`)
	},

	async create(payload) {
		return await ApiService.post('/owner/', payload)
	},
}
