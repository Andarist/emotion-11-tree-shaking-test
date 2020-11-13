const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  output: {
    filename: "main-webpack.js",
  },
  externals: ["react", "react-dom"],
  optimization: {
    minimize: true,
    minimizer: [
      // https://github.com/webpack/webpack/blob/923be31fba88468b70499428e1f2b83aad49af84/lib/config/defaults.js#L867-L875
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          compress: {
            passes: 2,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
