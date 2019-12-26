import { Direction } from "../types";

export const create = (coords: Partial<Direction>): Direction => ({ ...zero, ...coords });

export const zero: Direction = Object.freeze({ x: 0, y: 0, z: 0 });
export const one: Direction = Object.freeze({ x: 1, y: 1, z: 1 });
export const unitX: Direction = Object.freeze(create({ x: 1 }));
export const unitY: Direction = Object.freeze(create({ y: 1 }));
export const unitZ: Direction = Object.freeze(create({ z: 1 }));
export const up: Direction = Object.freeze(create({ y: 1 }));
export const down: Direction = Object.freeze(create({ y: -1 }));
export const right: Direction = Object.freeze(create({ x: 1 }));
export const left: Direction = Object.freeze(create({ x: -1 }));
export const forward: Direction = Object.freeze(create({ z: -1 }));
export const backward: Direction = Object.freeze(create({ z: 1 }));

export const add = (dir: Direction, ...directions: Direction[]): Direction => {
  return directions.reduce(
    (acc, curr) =>
      create({
        x: acc.x + curr.x,
        y: acc.y + curr.y,
        z: acc.z + curr.z
      }),
    dir
  );
};

export const direction = {
  create,
  add,
  zero,
  one,
  unitX,
  unitY,
  unitZ,
  up,
  down,
  right,
  left,
  forward,
  backward
};
