import { RuleSetUseItem, WebpackPluginInstance } from "webpack";

export interface TSCompilerConfig {
  name: string;
  plugins: WebpackPluginInstance[];
  use: RuleSetUseItem[];
  minimizer: "none" | "terser" | WebpackPluginInstance;
}

export type TSCompilerConfigFactory = (production: boolean) => TSCompilerConfig;
