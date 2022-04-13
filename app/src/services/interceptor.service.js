import axiosInstance from './api'
import TokenService from './storage.service'

const setup = (store) => {
	axiosInstance.interceptors.request.use(
		(config) => {
			const token = TokenService.getToken()
			if (token) {
				config.headers['Authorization'] = `Bearer ${token}`
			}
			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)

	axiosInstance.interceptors.response.use(
		(res) => {
			return res
		},
		async (err) => {
			const originalConfig = err.config
			console.log(originalConfig.url)

			if (
				!['/auth/google/', '/auth/jwt/create/', '/auth/jwt/refresh'].includes(
					originalConfig.url
				) &&
				err.response
			) {
				// Access Token was expired
				if (err.response.status === 401 && !originalConfig._retry) {
					originalConfig._retry = true

					const refreshToken = TokenService.getRefreshToken()
					if (!refreshToken) return

					try {
						const { data } = await axiosInstance.post('/auth/jwt/refresh', {
							refresh: refreshToken,
						})

						const accessToken = data.access
						TokenService.setToken(accessToken)
						await store.dispatch('authModule/refreshUser', accessToken)
						return axiosInstance(originalConfig)
					} catch (_error) {
							TokenService.removeTokens()
							store.dispatch('authModule/logout')
							return Promise.reject(err);
						
					}
				}

				return Promise.reject(err)
			}
		}
	)
}

export default setup
