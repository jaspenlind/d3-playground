import { LSystem } from "../../../types";

/**
 * Based on https://gist.github.com/nitaku/6521802
 */
export const gosperLike: LSystem = {
  variables: ["A", "B", "F"],
  axiom: "A",
  steps: 3,
  rules: new Map<string, string>([
    ["A", "A+BF++BF-FA--FAFA-BF+"],
    ["B", "-FA+BFBF++BF+FA--FA-B"]
  ])
};

/**
 * A and B mean to move forward, + means to turn left 60 degrees and - means to turn right 60 degrees - using a "turtle"-style program such as Logo
 */
export const gosper: LSystem = {
  variables: ["A", "B"],
  axiom: "A",
  rules: new Map<string, string>([
    ["A", "A-B--B+A++AA+B-"],
    ["B", "+A-BB--B-A++A+B"]
  ]),
  angle: 60
};
