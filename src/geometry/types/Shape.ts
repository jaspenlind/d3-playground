import { GeoPath } from "../../d3/types";
import { Path } from ".";

export interface Shape {
  path: Path;
  projection: GeoPath;
}
