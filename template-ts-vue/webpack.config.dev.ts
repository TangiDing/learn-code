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
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: "vue-loader",
      },
      {
        test: /.ts$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

export default config;
