import { Direction, Path } from "../types";
import { direction } from ".";

const create = (...directions: Partial<Direction>[]): Path => {
  return directions.map(direction.create) as Path;
};

export const path = {
  create
};
