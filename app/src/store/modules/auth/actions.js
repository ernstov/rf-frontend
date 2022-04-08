/* eslint-disable no-async-promise-executor */
import ApiService from '@/services/api.js'
import StorageService from '@/services/storage.service.js'
import { useToast } from 'vue-toastification'
import { UserRepository } from '../../../repositories/user'

const toast = useToast()

export default {
	async signup(_, payload) {
		const requestObject = {
			email: payload.email,
			username: payload.username,
			password: payload.password,
			confirm_password: payload.confirm_password,
		}
		await ApiService.post('/auth/users/', requestObject)
	},
	async login(context, payload) {
		// eslint-disable-next-line no-async-promise-executor
		return new Promise(async (resolve, reject) => {
			try {
				const requestObject = {
					email: payload.email,
					password: payload.password,
				}
				const { data } = await ApiService.post(
					'/auth/jwt/create/',
					requestObject
				)
				StorageService.setToken(data.access)
				StorageService.setRefreshToken(data.refresh)
				await context.dispatch('refreshUser')
				resolve(data)
			} catch (error) {
				console.log(error)
				reject(error)
			}
		})
	},
	async googleLogin(context, payload) {
		return new Promise(async (resolve, reject) => {
			const requestObject = {
				access_token: payload.token.access_token,
			}

			try {
				const { data } = await ApiService.post('/auth/google/', requestObject)
				StorageService.saveData('access', data.access)
				StorageService.saveData('refresh', data.refresh)
				await context.dispatch('refreshUser')
				resolve()
			} catch (error) {
				if (error?.response?.data?.non_field_errors) {
					toast.error(error.response.data.non_field_errors[0])
				}
				reject(error)
			}
		})
	},
	logout(context) {
		StorageService.removeData('access')
		StorageService.removeData('refresh')
		context.commit('logoutUser')
	},
	async refreshUser(context) {
		return new Promise(async (resolve, reject) => {
			try {
				const { data } = await UserRepository.me()
				context.commit('setUser', data)
				resolve(data)
			} catch (error) {
				reject(error)
				toast.error("Counldn't fetch user")
			}
		})
	},
	async resetPassword(_, payload) {
		const requestObject = {
			email: payload.email,
		}
		await ApiService.post('/auth/users/reset_password/', requestObject)
	},
}
