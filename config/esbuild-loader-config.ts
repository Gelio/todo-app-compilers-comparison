import { TSCompilerConfigFactory } from "./ts-compiler-config";
import { ESBuildPlugin /* , ESBuildMinifyPlugin */ } from "esbuild-loader";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

/**
 * @see https://github.com/privatenumber/esbuild-loader
 * @see https://esbuild.github.io/
 */
export const esbuildLoaderConfigFactory: TSCompilerConfigFactory = () => ({
  name: "esbuild",
  use: [
    {
      loader: "esbuild-loader",
      options: {
        loader: "tsx",
        tsconfigRaw: require("../tsconfig.json"),
      },
    },
  ],
  plugins: [new ESBuildPlugin(), new ForkTsCheckerWebpackPlugin()],
  // NOTE: for some reason, the app does not start with this plugin
  // minimizer: new ESBuildMinifyPlugin(),
  minimizer: "terser",
});
