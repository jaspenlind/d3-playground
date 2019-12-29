import { Layout } from "./Layout";
import { FractionalHex, fractionalHex } from "./FractionalHex";
import { Hex } from "./Hex";
import { Point, point } from "./Point";

export interface Orientation {
  f0: number;
  f1: number;
  f2: number;
  f3: number;
  b0: number;
  b1: number;
  b2: number;
  b3: number;
  startAngle: number;
  hexToPixel: (layout: Layout, hex: Hex) => Point;
  pixelToHex: (layout: Layout, pixel: Point) => FractionalHex;
}

const hexToPixel = (layout: Layout, hex: Hex) => {
  const { f0, f1, f2, f3 } = layout.orientation;
  const { q, r } = hex;

  const x = (f0 * q + f1 * r) * layout.size.x;
  const y = (f2 * q + f3 * r) * layout.size.y;

  return { x, y };
};

const pixelToHex = (layout: Layout, pixel: Point): FractionalHex => {
  const { orientation, origin, size } = layout;
  const { b0, b1, b2, b3 } = orientation;

  const pt = point(pixel.x - origin.x / size.x, pixel.y - origin.y / size.y);
  const q = b0 * pt.x + b1 * pt.y;
  const r = b2 * pt.x + b3 * pt.y;

  return fractionalHex(q, r, -q - r);
};

export const pointX: Orientation = {
  f0: Math.sqrt(3),
  f1: Math.sqrt(3) / 2,
  f2: 0,
  f3: 3 / 2,
  b0: Math.sqrt(3) / 3,
  b1: -1 / 3,
  b2: 0,
  b3: 2 / 3,
  startAngle: 0.5,
  hexToPixel,
  pixelToHex
};

export const flat: Orientation = {
  f0: 3 / 2,
  f1: 0,
  f2: Math.sqrt(3) / 2,
  f3: Math.sqrt(3),
  b0: 2 / 3,
  b1: 0,
  b2: -1 / 3,
  b3: Math.sqrt(3) / 3,
  startAngle: 0,
  hexToPixel,
  pixelToHex
};

export const orientation = {
  pointX,
  flat
};
