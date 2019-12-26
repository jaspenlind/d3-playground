import { LSystem } from "../../../types";

/**
 ```
n=0:               A             start (axiom/initiator)
                  / \
n=1:             A   B           the initial single A spawned into AB by rule (A → AB), rule (B → A) couldn't be applied
                /|     \
n=2:           A B      A        former string AB with all rules applied, A spawned into AB again, former B turned into A
             / | |       | \
n=3:         A B A       A B     note all A's producing a copy of themselves in the first place, then a B, which turns ...
           / | | | \     | \ \
n=4:       A B A A B     A B A   ... into an A one generation later, starting to spawn/repeat/recurse then
 ```

 source: https://en.wikipedia.org/wiki/L-system
 */
export const algae: LSystem = {
  variables: ["A", "B"],
  axiom: "A",
  rules: new Map<string, string>([
    ["A", "AB"],
    ["B", "A"]
  ])
};
