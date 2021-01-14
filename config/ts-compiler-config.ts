import { RuleSetUseItem, WebpackPluginInstance } from "webpack";

export interface TSCompilerConfig {
  name: string;
  plugins: WebpackPluginInstance[];
  use: RuleSetUseItem[];
}

export type TSCompilerConfigFactory = (production: boolean) => TSCompilerConfig;
