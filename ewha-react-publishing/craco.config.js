const path = require("path");

module.exports = {
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path =
        path.resolve("docs");
      return webpackConfig; // Important: return the modified config
    },
  },
};
