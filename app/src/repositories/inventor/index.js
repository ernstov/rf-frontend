import ApiService from '../../services/api.service'

export const InventorRepository = {
	async search(query) {
		return await ApiService.get(`/inventor?search=${query}`)
	},
}
