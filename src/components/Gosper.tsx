import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { GeoPath, ShapeData, SVGSelection, SVGTransition } from "../types";
import { create } from "../geometry/fractals";
import { gosperLike } from "../geometry/fractals/algorithms";
import { hexagon } from "../geometry/shapes";

const useStyles = makeStyles(() =>
  createStyles({
    hex: {
      stroke: "black",
      strokeWidth: 1
    }
  })
);

/* update the drawing, then call again this function till data ends
 */

const color = (i: number): d3.HCLColor => {
  const i7 = Math.floor(i / 7);
  const i49 = Math.floor(i / 49);
  const colors = [80, 55, 30, 55, 80, 55, 80];

  return d3.hcl(((i7 % 7) * 360) / 7, 30, colors[i49]);
};

const redraw = (vis: SVGSelection, pathGenerator: GeoPath, dataToDraw: ShapeData[], size: number): SVGTransition => {
  return vis
    .selectAll(".hex")
    .data(dataToDraw.slice(0, size))
    .enter()
    .append("path")
    .attr("class", "hex")
    .attr("d", pathGenerator as any)
    .attr("fill", (_: any, i: number) => {
      return color(i).toString();
    })
    .transition()
    .duration(60)
    .on("end", () => {
      if (size > dataToDraw.length) {
        return;
      }
      // eslint-disable-next-line consistent-return
      return redraw(vis, pathGenerator, dataToDraw, size + 1);
    });
};

export const Gosper = (props: any) => {
  const ref = useRef<SVGElement>(null);

  useStyles();
  useEffect(() => {
    const vis: SVGSelection = d3.select<SVGElement, {}>(ref.current as SVGElement);

    vis.attr("transform", "translate(660,360) rotate(120)");

    const gosperFractal = create(gosperLike);
    const data = hexagon.coords(gosperFractal);

    const getFeatures = () => {
      const results = [];
      for (let i = 0; i < data.directions.length; i += 1) {
        const d = data.directions[i];
        results.push(hexagon.create(d));
      }
      return results;
    };

    const hexes = {
      type: "FeatureCollection",
      features: getFeatures()
    };

    const projection = hexagon.project();

    /* start the animation
     */

    redraw(vis, projection, hexes.features, 1);

    vis
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 3);
  }, [props.data]);

  return (
    <svg width={props.width} height={props.height}>
      <g ref={ref as any} />
    </svg>
  );
};
