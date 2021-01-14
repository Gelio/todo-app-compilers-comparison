import { TSCompilerConfigFactory } from "./ts-compiler-config";

export const tsLoaderConfigFactory: TSCompilerConfigFactory = () => ({
  name: "ts-loader",
  plugins: [],
  use: ["ts-loader"],
});
