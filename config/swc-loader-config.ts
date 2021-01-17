import { TSCompilerConfigFactory } from "./ts-compiler-config";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

/**
 * @see https://github.com/swc-project/swc-loader
 * @see https://swc.rs/
 */
export const swcLoaderConfigFactory: TSCompilerConfigFactory = (
  production,
) => ({
  name: "swc",
  use: [
    {
      loader: "swc-loader",
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              development: !production,
            },
          },
          // minify: production,
        },
      },
    },
  ],
  plugins: [new ForkTsCheckerWebpackPlugin()],
  // For some reason, the default minification is not as great here. Perhaps I misconfigured swc
  // minimizer: "none",
  minimizer: "terser",
});
