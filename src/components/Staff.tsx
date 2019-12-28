import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { GeoPath, D3ShapeData, SVGSelection } from "../types";

import { d3shape, hexagon } from "../geometry/shapes";
import { direction, path } from "../geometry";

const useStyles = makeStyles(() =>
  createStyles({
    hex: {
      stroke: "black",
      strokeWidth: 1
    }
  })
);

const draw = (selection: SVGSelection, projection: GeoPath, data: D3ShapeData[]) => {
  const chunk = data.splice(0, 1);

  selection
    .append("path")
    .attr("class", "hex")
    .data(chunk)
    .attr("d", projection as any)
    .attr("fill", "grey");

  if (data.length > 0) {
    draw(selection, projection, data);
  }
};
export const Staff = (props: any) => {
  const ref = useRef<SVGElement>(null);

  useStyles();
  useEffect(() => {
    const vis: SVGSelection = d3.select<SVGElement, {}>(ref.current as SVGElement);

    vis.attr("transform", "translate(660,360) rotate(120)");

    const projection = hexagon.projection;

    const p = path(direction.zero);

    for (let i = 0; i < 10; i += 1) {
      p.grow(direction.forward, direction.right);
    }
    p.directions.push(direction.backward);
    for (let i = 0; i < 11; i += 1) {
      p.grow(direction.forward, direction.right);
    }

    const tempData = p.directions.map(d3shape);

    draw(vis, projection, tempData);

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
