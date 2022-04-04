import ApiService from '../../services/api.service'

export const AssetRepository = {
	async create(payload) {
		return await ApiService.post('asset/', payload)
	},
}
