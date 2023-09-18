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
    resolve: {
      fallback: {
        util: require.resolve("util/"),
        path: require.resolve("path-browserify"),
      },
      alias: {
        "pdfjs-dist": "pdfjs-dist/build/pdf",
      },
    },
  },

  devServer: {
    allowedHosts: "all",
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws",
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
