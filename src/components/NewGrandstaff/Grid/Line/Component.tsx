import React from "react";
// import { Line } from "../Line";
import { Props } from "./Props";
import { dimensions } from "../../Tiles";

type LinePosition = "above" | "on" | "below";

const Line = (props: { position: LinePosition }) => {
  const { position } = props;

  let y = 1;
  if (position === "on") {
    y = dimensions.height / 2 + 1;
  } else if (position === "below") {
    y = dimensions.height + 1;
  }

  return (
    <g transform={`translate(0,${y})`}>
      <line x1="0" y1="0" x2={dimensions.width} y2="0" strokeWidth="1.5" stroke="#000000" strokeLinecap="square" />
    </g>
  );
};
export const Component = (props: Props) => {
  const { classes, dimensions, enabled, position } = props;
  const { x, y } = position;
  const { width } = dimensions;
  const lineStart = 8;
  const lineMiddleC = lineStart + 6;

  const evenX = x % 2 !== 0;
  const hasLine =
    enabled && ((y > lineStart && y < lineMiddleC) || (y === lineStart && evenX) || (y === lineMiddleC && x === width));
  return <g className={classes.root}>{hasLine && <Line position={evenX ? "on" : "above"} />}</g>;
};
