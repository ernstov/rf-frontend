import ApiService from '../../services/api.service'

export const OwnerRepository = {
	async search(query) {
		return await ApiService.get(`/owner?search=${query}`)
	},
}
