import { geoTransform, geoPath } from "d3-geo";
import { GeoPath, Shape } from "../../types";
import { path as p } from "..";
import { rightDown, rightForward, upForward, leftUp, backwardLeft, backwardDown } from "../direction";

export const path = p(rightDown, rightForward, upForward, leftUp, backwardLeft, backwardDown);

const projection = (): GeoPath => {
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

export const hexagon: Shape = {
  path,
  projection: projection()
};
