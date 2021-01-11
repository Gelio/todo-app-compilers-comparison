import { Configuration } from "webpack";
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const production = process.env.NODE_ENV === "production";
const port = parseInt(process.env.PORT!, 10) || 8080;

const config: Configuration = {
  mode: production ? "production" : "development",
  devtool: "source-map",
  entry: "./src/index.tsx",
  output: {
    path: resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo App",
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: production,
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  devServer: {
    port,
  },
};

export default config;
