import api from '../../services/api'
export const TechnologyRepository = {
	async search(query) {
		return await api.get(`/technology/?search=${query}`)
	},
}
