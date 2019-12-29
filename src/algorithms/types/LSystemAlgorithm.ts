import LSystem from "lindenmayer";

export interface LSystemAlgorithm {
  steps: number;
  angle: number;
  definition: LSystem;
}
