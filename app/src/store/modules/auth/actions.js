import ApiService from "@/services/api.service.js";
import StorageService from "@/services/storage.service.js";

export default {
  async signup(payload) {
    const requestObject = {
      email: payload.email,
      username: payload.username,
      password: payload.password,
      confirm_password: payload.confirm_password,
    };
    await ApiService.post("auth/users/", requestObject);
  },
  async login(context, payload) {
    const requestObject = {
      email: payload.email,
      password: payload.password,
    };
    await ApiService.post("auth/jwt/create/", requestObject)
      .then(function (response) {
        const tokens = response.data;
        StorageService.saveData("access", tokens.access);
        StorageService.saveData("refresh", tokens.refresh);
        context.commit("setUser", requestObject.email);
        return response;
      })
      .catch(function (error) {
        throw error;
      });
  },
  logout(context) {
    StorageService.removeData("access");
    StorageService.removeData("refresh");
    context.commit("logoutUser");
  },
  async resetPassword(context, payload) {
    const requestObject = {
      email: payload.email,
    };
    await ApiService.post("auth/users/reset_password/", requestObject);
  },
};
