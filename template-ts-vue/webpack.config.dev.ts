import path from "path";
import webpack from "webpack";
import { VueLoaderPlugin } from "vue-loader";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: "vue-loader",
      },
      {
        test: /.ts$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

export default config;
