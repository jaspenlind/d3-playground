import { geoTransform, geoPath } from "d3-geo";
import { Direction, Fractal, GeoPath, Path, ShapeData } from "../../types";
import { direction, path } from "..";
import { add, backward, forward, left, right, down, up } from "../direction";
const rightDown = add(right, down);
const rightForward = add(right, forward);
const upForward = add(up, forward);
const leftUp = add(left, up);
const backwardLeft = add(backward, left);
const backwardDown = add(backward, down);

export const hexagonPath = path(rightDown, rightForward, upForward, leftUp, backwardLeft, backwardDown);

export const pathTranslator = (shapePath: Path, data: Fractal): Path => {
  const paths = [direction.zero];

  let index = 0;

  const temp = [...data].map(char => {
    if (char === "+") {
      index = (index + 1) % shapePath.directions.length;
    } else if (char === "-") {
      index -= 1;
      if (index === -1) {
        index = shapePath.directions.length - 1;
      }
    } else if (char === "F") {
      const dir = shapePath.directions[index];
      const current = paths[paths.length - 1];
      paths.push(add(current, dir));
    }
  });

  return path(...paths);
};

const coords = (data: Fractal): Path => {
  /* start the walk from the origin cell, facing east
   */

  const directions = hexagonPath;
  const paths = [direction.zero];

  let index = 0;
  const ref = data;
  for (let i = 0, len = ref.length; i < len; i += 1) {
    const char = ref[i];
    if (char === "+") {
      index = (index + 1) % directions.directions.length;
    } else if (char === "-") {
      index -= 1;
      if (index === -1) {
        index = 5;
      }
    } else if (char === "F") {
      const dir = directions.directions[index];
      const current = paths[paths.length - 1];
      paths.push(add(current, dir));
    }
  }

  return path(...paths);
};

/* create a new hexagon
 */
const create = (direction: Direction): ShapeData => {
  /* conversion from hex coordinates to rect
   */
  const x = 2 * (direction.x + direction.z / 2.0);
  const y = 2 * direction.z;
  return {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [x, y + 2],
          [x + 1, y + 1],
          [x + 1, y],
          [x, y - 1],
          [x - 1, y],
          [x - 1, y + 1],
          [x, y + 2]
        ]
      ]
    }
  };
};

const project = (): GeoPath => {
  /* custom projection to make hexagons appear regular (y axis is also flipped)
   */

  const radius = 12;
  const dx = radius * 2 * Math.sin(Math.PI / 3);
  const dy = radius * 1.5;

  return geoPath().projection(
    geoTransform({
      point(x, y) {
        // eslint-disable-next-line no-bitwise
        return this.stream.point((x * dx) / 2, (-(y - (2 - (y & 1)) / 3) * dy) / 2);
      }
    })
  );
};

export const hexagon = {
  create,
  coords,
  project,
  pathTranslator,
  hexagonPath
};
