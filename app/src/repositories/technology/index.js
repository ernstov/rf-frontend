import ApiService from '../../services/api.service'

export const TechnologyRepository = {
	async search(query) {
		return await ApiService.get(`/technology/?search=${query}`)
	},
}
