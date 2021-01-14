import { babelLoaderConfigFactory } from "./babel-loader-config";
import { swcLoaderConfigFactory } from "./swc-loader-config";
import { tsLoaderConfigFactory } from "./ts-loader-config";

export const tsCompilerConfigs = {
  tsLoader: tsLoaderConfigFactory,
  babelLoader: babelLoaderConfigFactory,
  swcLoader: swcLoaderConfigFactory,
};
