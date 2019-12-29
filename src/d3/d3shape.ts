import { D3ShapeData } from "./types";
import { Direction } from "../geometry/types";

export const d3shape = (direction: Direction): D3ShapeData => {
  /* conversion from hex coordinates to rect
   */
  const x = 2 * (direction.x + direction.z / 2.0);
  const y = 2 * direction.z;
  const feature: D3ShapeData = {
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

  return feature;
};
