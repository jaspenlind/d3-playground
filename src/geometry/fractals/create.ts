import { Fractal, LSystem } from "../../types";

const applyRule = (rules: Map<string, string>, char: string) => {
  return rules.get(char) || char;
};

export const create = (options: LSystem): Fractal => {
  const steps = 3;
  let input = options.axiom;
  let output: string[] = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0, ref = options.steps || steps; ref >= 0 ? i < ref : i > ref; i = ref >= 0 ? ++i : --i) {
    output = [...input].map(x => applyRule(options.rules, x)); //options.rules.get(x) || x);
    input = output.join("");
  }
  return output.join("");
};
