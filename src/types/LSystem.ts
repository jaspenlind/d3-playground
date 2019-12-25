export interface LSystem {
  variables: string[];
  axiom: string;
  rules: Map<string, string>;
  angle?: number;
  constants?: string[];
  steps?: number;
}
