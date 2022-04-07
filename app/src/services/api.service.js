// import axios from "axios";
// import TokenService from "./storage.service";

// const ApiService = {
//     init(baseUrl) {
//         console.log(baseUrl);
//         axios.defaults.baseURL = baseUrl;
//     },
//     setHeader(headerKey, headerValue) {
//         axios.defaults.headers.common[headerKey] = headerValue;
//         console.log(axios.defaults.headers);
//     },
//     setAuthorizationHeader() {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`;
//     },
//     removeHeader() {
//         axios.defaults.headers.common = {};
//     },
//     get(data) {
//         return axios.get(data);
//     },
//     post(resource, data) {
//         return axios.post(axios.defaults.baseURL + resource, data);
//     },
//     put(data) {
//         return axios.put(data);
//     },
//     delete(data) {
//         return axios.delete(data);
//     },
// }
// export default ApiService;

import axios from 'axios'
import StorageService from './storage.service'

// Manage all app-wide Api calls

const ApiService = {
	init(baseUrl) {
		axios.defaults.baseURL = baseUrl
		this.setAuthHeaders()
	},

	setHeader(key, value) {
		axios.defaults.headers.common[key] = value
	},
	removeHeader() {
		axios.defaults.headers.common = {}
	},
	get(path, options) {
		return axios.get(path, options || {})
	},
	post(resource, data, options) {
		return axios.post(resource, data, options || {})
	},
	put(path, payload) {
		return axios.put(path, payload)
	},
	delete(path) {
		axios.delete(path)
	},
	setAuthHeaders() {
		const token = StorageService.getToken()
		console.log('set headers', token)

		if (token) {
			this.setHeader('Authorization', `Bearer ${token}`)
		}
	},
}

export default ApiService
