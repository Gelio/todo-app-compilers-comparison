import { TSCompilerConfigFactory } from "./ts-compiler-config";

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
