import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { D3ShapeData, GeoPath, SVGSelection, SVGTransition } from "../d3/types";
import { gosper } from "../algorithms";
import { hexagon } from "../geometry/shapes";
import { translate } from "../fractals";
import { d3shape } from "../d3";

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

const redraw = (vis: SVGSelection, pathGenerator: GeoPath, dataToDraw: D3ShapeData[], size: number): SVGTransition => {
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

    const data = translate(hexagon.path, gosper);

    const shapes = data.directions.map(d3shape);

    /* start the animation
     */

    redraw(vis, hexagon.projection, shapes, 1);

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
