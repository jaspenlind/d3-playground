import { area as commonArea } from "./regularPolygon";
import { Perimeter, Side } from "./types";

const numberOfSides = 6;

export const area = commonArea;

/**
 * @param s The length of a side
 */
export const perimeter = (s: Side): Perimeter => numberOfSides * s;

export const regularHexagon = {
  area,
  perimeter
};
