import ApiService from '../../services/api.service'

export const AssetRepository = {
	async create(payload) {
		return await ApiService.post('/asset/', payload)
	},

	async find(query) {
		console.log(query)
		return await ApiService.get('asset/', { params: query || {} })
	},

	async createWithCSV(payload) {
		return await ApiService.post('/bulk-upload/', payload, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},

	async findById(id) {
		return await ApiService.get(`asset/${id}`)
	},

	async update(id, payload) {
		return await ApiService.put(`asset/${id}/`, payload)
	},
}
