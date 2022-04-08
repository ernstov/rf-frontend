import ApiService from '../../services/api'

export const UserRepository = {
	async me() {
		return await ApiService.get('/auth/users/me/')
	},
}
