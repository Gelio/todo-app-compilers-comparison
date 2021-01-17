import { TSCompilerConfigFactory } from "./ts-compiler-config";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export const tsLoaderConfigFactory: TSCompilerConfigFactory = () => ({
  name: "ts-loader",
  plugins: [new ForkTsCheckerWebpackPlugin()],
  use: [
    {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  ],
  minimizer: "terser",
});
