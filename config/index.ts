import { babelLoaderConfigFactory } from "./babel-loader-config";
import { esbuildLoaderConfigFactory } from "./esbuild-loader-config";
import { swcLoaderConfigFactory } from "./swc-loader-config";
import { tsLoaderConfigFactory } from "./ts-loader-config";

export const tsCompilerConfigs = {
  ts: tsLoaderConfigFactory,
  babel: babelLoaderConfigFactory,
  swc: swcLoaderConfigFactory,
  esbuild: esbuildLoaderConfigFactory,
};
