import { Path } from "../geometry/types";
import { LSystemAlgorithm } from "../algorithms/types";
import { direction, path } from "../geometry";

export const translate = (shape: Path, algorithm: LSystemAlgorithm): Path => {
  const { definition, steps } = algorithm;
  const paths = [direction.zero];
  let index = 0;
  definition.iterate(steps);
  const product = definition.getString();

  /* start the walk from the origin cell, facing east
   */
  const ref = product;
  for (let i = 0, len = ref.length; i < len; i += 1) {
    const char = ref[i];
    if (char === "+") {
      index = (index + 1) % shape.directions.length;
    } else if (char === "-") {
      index -= 1;
      if (index === -1) {
        index = 5;
      }
    } else if (char === "F") {
      const dir = shape.directions[index];
      const current = paths[paths.length - 1];
      paths.push(direction.add(current, dir));
    }
  }

  return path(...paths);
};
