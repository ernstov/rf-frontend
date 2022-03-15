
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/assets/scss/_variables.scss";
                @import "@/assets/scss/_base.scss";
                @import "@/assets/scss/_utilities.scss";
                @import "@/assets/scss/_mixins.scss";
            `
            }
        }
    }
};