module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/heroes_exercise/docs/'
    : '/',
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
