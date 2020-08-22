module.exports = {
  publicPath: '/heroes-excercise/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/sass/_variables.scss";
          @import "@/sass/_mixins.scss";
        `,
      },
    },
  },
};
