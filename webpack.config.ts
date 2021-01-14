import { Configuration, DefinePlugin } from "webpack";
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { tsCompilerConfigs } from "./config";

const production = process.env.NODE_ENV === "production";
const port = parseInt(process.env.PORT!, 10) || 8080;

const tsCompiler: keyof typeof tsCompilerConfigs = "swcLoader";

const tsCompilerConfig = tsCompilerConfigs[tsCompiler](production);

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
        use: tsCompilerConfig.use,
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
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets" }],
    }),
    new DefinePlugin({
      TS_COMPILER: JSON.stringify(tsCompilerConfig.name),
    }),
    ...tsCompilerConfig.plugins,
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: production,
    minimizer: [
      tsCompilerConfig.minimizer === "terser"
        ? ("..." as "...")
        : tsCompilerConfig.minimizer === "none"
        ? // NOTE: will get filtered out below
          (false as never)
        : tsCompilerConfig.minimizer,
      new CssMinimizerPlugin(),
    ].filter(Boolean),
  },
  devServer: {
    port,
    hot: !production,
  },
};

export default config;
