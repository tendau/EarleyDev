const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "/api/",
    }),
  },
});
