const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/app/" : "/",
  transpileDependencies: true,
  configureWebpack: {
    // plugins: [
    //   new BundleAnalyzerPlugin()
    // ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  // devServer: {
  //   port: 8080,
  //   overlay: {
  //     warnings: true,
  //     errors: true,
  //   },
  // },
});
