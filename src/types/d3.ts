import { GeoPath as d3GeoPath, GeoPermissibleObjects, Selection, Transition } from "d3";

export type GeoPath = d3GeoPath<any, GeoPermissibleObjects>;
export type SVGSelection = Selection<SVGElement, {}, null, undefined>;
export type SVGTransition = Transition<SVGPathElement, D3ShapeData, SVGElement, {}>;

export interface D3Shape {
  type: "Polygon";
  coordinates: number[][][];
}

export interface D3ShapeData {
  type: "Feature";
  geometry: D3Shape;
}
