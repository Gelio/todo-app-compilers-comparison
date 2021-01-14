import { TSCompilerConfigFactory } from "./ts-compiler-config";

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
        },
      },
    },
  ],
  plugins: [],
});
