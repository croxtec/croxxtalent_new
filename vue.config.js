const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === "production" ? "/dist" : "/",
  // outputDir: "public"
  // publicPath: "/",
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
    allowedHosts: 'all',
    client: {
        webSocketURL: 'auto://0.0.0.0:0/ws'
    }
  }

  // devServer: {
  //   port: 8080,
  //   overlay: {
  //     warnings: true,
  //     errors: true,
  //   },
  // },
});
