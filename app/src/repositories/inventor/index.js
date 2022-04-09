import ApiService from '../../services/api'

export const InventorRepository = {
	async search(query) {
		return await ApiService.get(`/inventor?search=${query}`)
	},

	async create(payload) {
		return await ApiService.post('/inventor/', payload)
	},
}
