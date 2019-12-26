import { GeoPath as d3GeoPath, GeoPermissibleObjects, Selection, Transition } from "d3";
import { ShapeData } from ".";

export type GeoPath = d3GeoPath<any, GeoPermissibleObjects>;
export type SVGSelection = Selection<SVGElement, {}, null, undefined>;
export type SVGTransition = Transition<SVGPathElement, ShapeData, SVGElement, {}>;
