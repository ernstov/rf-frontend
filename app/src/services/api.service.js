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

import axios from "axios";

// Manage all app-wide Api calls


const ApiService = {
  init(baseUrl) {
    axios.defaults.baseURL = baseUrl;
  },

  setHeader(key, value) {
    axios.defaults.headers.common[key] = value;
  },
  removeHeader() {
    axios.defaults.headers.common = {};
  },
  get(data) {
    return axios.get(data);
  },
  post(resource, data) {
    return axios.post(axios.defaults.baseURL + resource, data);
  },
  put(data) {
    return axios.put(data);
  },
  delete(data) {
    axios.delete(data);
  },
};

export default ApiService;