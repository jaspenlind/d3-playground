import React from "react";
import { Line, LinePosition } from "../Line";
import { Props } from "./Props";

export const Component = (props: Props) => {
  const { classes, dimensions, enabled, position } = props;
  const { x, y } = position;
  const { height, width } = dimensions;
  const positions: LinePosition[] = [];
  const show = y > 7 && !(y + 1 === height && x + 1 === width);
  if (enabled && show) {
    const evenX = x % 2 === 0;
    positions.push(evenX ? "on" : "below");

    // if (y + 1 === height) {
    //   positions.push("below");
    // }
  }

  return (
    <g className={classes.root}>
      {positions.map(pos => (
        <Line position={pos} />
      ))}
    </g>
  );
};
