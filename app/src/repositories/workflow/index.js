import ApiService from '../../services/api.service'

export const WorkflowRepository = {
	async search(query) {
		return await ApiService.get(`/workflow/?search=${query}`)
	},

	async create(workflow) {
		return await ApiService.post('/workflow/', workflow)
	},

	async getPrograms() {
		return await ApiService.get('/workflow/', {
			params: { type: 'program', search: '' },
		})
	},

	async getProjects() {
		return await ApiService.get('/workflow/', {
			params: { type: 'project', search: '' },
		})
	},

	async update(id, payload) {
		return await ApiService.put(`/workflow/${id}/`, payload)
	},

	async delete(id) {
		return await ApiService.delete(`/workflow/${id}/`)
	},
}
