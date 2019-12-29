import { Direction, Path } from "./types";
import { direction } from ".";

export const path = (...directions: Partial<Direction>[]): Path => {
  const dirs = directions.map(direction.create);
  const body = {
    directions: dirs,
    grow: (dir: Direction, ...rest: Direction[]) => {
      if (dirs.length === 0) {
        return body;
      }
      const last = dirs.slice(-1)[0];
      dirs.push(direction.add(last, dir, ...rest));
      return body;
    }
  };

  return body;
};
