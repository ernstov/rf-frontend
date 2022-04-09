import api from '../../services/api'
export const TechnologyRepository = {
	async search(query) {
		return await api.get(`/technology/?search=${query}`)
	},

	async create(data) {
		return await api.post('/technology/', data)
	},
}
