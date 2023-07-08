const { defineConfig } = require("@vue/cli-service");
const path = require('path');
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
    static: path.join(__dirname, 'public/'),
    port: 8080,
    hot: "only"
  },
});
