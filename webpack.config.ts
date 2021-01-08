import { Configuration } from "webpack";
import { resolve } from "path";

const production = process.env.NODE_ENV === "production";

const config: Configuration = {
  mode: production ? "production" : "development",
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    path: resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", "tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};

export default config;
