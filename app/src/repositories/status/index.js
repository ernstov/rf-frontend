import ApiService from '../../services/api.service'

export const StatusRepository = {
	async search(query) {
		return await ApiService.get(`/status/?search=${query}`)
	},
}
