import ApiService from '../../services/api.service'

export const WorkflowRepository = {
	async search(query) {
		return await ApiService.get(`/workflow/?search=${query}`)
	},
}
