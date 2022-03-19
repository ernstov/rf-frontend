//Managing Storage in local stoarge

const StorageService = {
    getData(key) {
        return localStorage.getItem(key);
    },

    saveData(key, data) {
        localStorage.setItem(key, data);
    },
    removeData(key) {
        localStorage.removeItem(key);
    }
}

export default StorageService;