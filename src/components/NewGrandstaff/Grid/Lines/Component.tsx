import React from "react";
import { Line, LinePosition } from "../Line";
import { Props } from "./Props";

export const Component = (props: Props) => {
  const { classes, dimensions, enabled, position } = props;
  const { x, y } = position;
  const { height } = dimensions;
  const positions: LinePosition[] = [];

  if (enabled) {
    const evenX = x % 2 === 0;
    positions.push(evenX ? "on" : "above");

    if (y + 1 === height) {
      positions.push("below");
    }
  }

  return (
    <g className={classes.root}>
      {positions.map(pos => (
        <Line position={pos} />
      ))}
    </g>
  );
};
