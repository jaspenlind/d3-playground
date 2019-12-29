import { Point } from "./Point";
import { Orientation } from "./Orientation";

export interface Layout {
  orientation: Orientation;
  size: Point;
  origin: Point;
}

// export const layout = (orientation: Orientation, size: Point, origin: Point): Orientation => {

// }
