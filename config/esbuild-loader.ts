import { TSCompilerConfigFactory } from "./ts-compiler-config";
import { ESBuildPlugin } from "esbuild-loader";

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
  plugins: [new ESBuildPlugin()],
});
