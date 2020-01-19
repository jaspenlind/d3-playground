import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Hex, Layout, Orientation, Point } from "../grid";

/* Given a set of points, return the maximum extent
   {left, right, top, bottom} */
function pointSetBounds(points: Point[]) {
  let left = Infinity,
    top = Infinity,
    right = -Infinity,
    bottom = -Infinity;
  for (const p of points) {
    if (p.x < left) {
      left = p.x;
    }
    if (p.x > right) {
      right = p.x;
    }
    if (p.y < top) {
      top = p.y;
    }
    if (p.y > bottom) {
      bottom = p.y;
    }
  }
  return { left, top, right, bottom };
}

/* Given a set of hexes, return the maximum extent
   {left, right, top, bottom} */
function hexSetBounds(layout: Layout, hexes: Hex[]) {
  const corners = [];
  for (let corner = 0; corner < 6; corner++) {
    corners.push(layout.hexCornerOffset(corner));
  }
  const cornerBounds = pointSetBounds(corners);

  const centerBounds = pointSetBounds(hexes.map(h => layout.hexToPixel(h)));

  return {
    left: cornerBounds.left + centerBounds.left,
    top: cornerBounds.top + centerBounds.top,
    right: cornerBounds.right + centerBounds.right,
    bottom: cornerBounds.bottom + centerBounds.bottom
  };
}

function makeHexagonalShape(N: number) {
  const results = [];
  for (let q = -N; q <= N; q++) {
    for (let r = -N; r <= N; r++) {
      const hex = new Hex(q, r, -q - r);
      if (hex.len() <= N) {
        results.push(hex);
      }
    }
  }
  return results;
}
// const drawHex = () => {

// };

export const Grid = () => {
  const ref = useRef<SVGElement>(null);

  useEffect(() => {
    const SCALE = 100;

    const layouts = {
      flat: new Layout(Layout.flat, new Point(SCALE, SCALE), new Point(0, 0)),
      pointy: new Layout(Layout.pointy, new Point(SCALE, SCALE), new Point(0, 0))
    };

    const orientations = {
      flat: {
        layout: "flat",
        rotation: 0,
        rotationInterpolation: 0,
        variants: "flat"
      },
      pointy: {
        layout: "pointy",
        rotation: -30,
        rotationInterpolation: -30,
        variants: "pointy"
      }
    };

    const svg = d3.select<SVGElement, {}>(ref.current as SVGElement);
    const bounds = hexSetBounds(layouts.flat, makeHexagonalShape(2));
    const { left, top, right, bottom } = bounds;
    svg.attr("viewbox", `${left} ${top} ${right} ${bottom}`);
    const grid = svg.append("g");

    // hexCenter(new Hex(-2/3,1/3,1/3)).transform
    const shapes = makeHexagonalShape(7);
    const one = grid.append("g");
    one.attr("transform", "translate(0,520)");
    const p = one.append("polygon");

    const points = shapes.map(x => layouts.flat.hexToPixel(x));

    p.attr("points", points.map(x => `${x.x},${x.y}`).join(" ")); //"100,0 50,-87 -50,-87 -100,-0 -50,87 50,87");

    /* flat topped hex position */
    function hexCenter(hex: Hex) {
      const p = layouts.flat.hexToPixel(hex);
      return {
        x: p.x,
        y: p.y,
        transform: `translate(${p.x.toFixed(0)},${p.y.toFixed(0)})`
      };
    }
  });

  return <svg width={900} height={600} ref={ref as any}></svg>;
};
