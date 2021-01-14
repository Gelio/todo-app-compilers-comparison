import { babelLoaderConfigFactory } from "./babel-loader-config";
import { tsLoaderConfigFactory } from "./ts-loader-config";

export const tsCompilerConfigs = {
  tsLoader: tsLoaderConfigFactory,
  babelLoader: babelLoaderConfigFactory,
};
