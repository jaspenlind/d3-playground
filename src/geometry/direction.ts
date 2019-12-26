import { Direction } from "../types";

const create = (coords: Partial<Direction>): Direction => ({ ...zero, ...coords });

const zero: Direction = Object.freeze({ x: 0, y: 0, z: 0 });

export const direction = {
  create,
  zero
};
