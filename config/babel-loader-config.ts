import { TSCompilerConfigFactory } from "./ts-compiler-config";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const babelLoaderConfigFactory: TSCompilerConfigFactory = (
  production,
) => ({
  name: "babel-loader",
  use: [
    {
      loader: "babel-loader",
      options: {
        plugins: production ? [] : [require.resolve("react-refresh/babel")],
        presets: [
          "@babel/preset-typescript",
          [
            "@babel/preset-react",
            {
              development: !production,
              runtime: "automatic",
            },
          ],
        ],
      },
    },
  ],
  plugins: production ? [] : [new ReactRefreshWebpackPlugin()],
});
