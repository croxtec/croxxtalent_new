const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === "production" ? "/app/" : "/",
  publicPath: "/",
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

  devServer: {
    disableHostCheck: true
    // port: 8080,
    // overlay: {
    //   warnings: true,
    //   errors: true,
    // },
  },
});
