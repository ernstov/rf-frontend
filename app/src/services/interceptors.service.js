import axios from "axios";
import TokenService from './storage.service.js'
// import store from '../store/index.js';
import ApiService from './api.service.js'

//Request interceptor for API calls
const RequestInterceptor = {
    interceptors() {
        axios.interceptors.response.use(
            response => {
                if (response.status === 200) {
                    return Promise.resolve(response);
                } else {
                    return Promise.reject(response);
                }
            },
            error => {
                if (error.response.status) {
                    if (error.response.status === 401 && !error.config._retry) {
                        error.config._retry = true;
                        const requestObject = {
                            refresh: TokenService.getRereshToken()
                        }

                        ApiService.post('/jwt/refresh/', requestObject)
                            .then(function (response) {
                                console.log(response);
                                TokenService.saveData('access', response.data.access)
                                error.config.headers["Authorization"] = `Bearer ${TokenService.getData('access')}`;
                                axios.request(error.config).then(response => {
                                    console.log(response);
                                }).catch((err) => {
                                    console.log(err);
                                })

                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    }
                }
                return Promise.reject(error)
            }
        )

    }
}

export default RequestInterceptor;