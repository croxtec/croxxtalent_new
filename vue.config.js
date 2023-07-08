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
    static: path.join(__dirname, 'public/'),
    devMiddleware: {
      publicPath: '/dist/'
    },
    port: 8080,
    hot: "only"
  },
});
