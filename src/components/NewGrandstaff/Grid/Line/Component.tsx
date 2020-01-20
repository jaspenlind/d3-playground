import React from "react";
import { dimensions } from "../../Tiles";
import { Props } from "./Props";

export const Component = (props: Props) => {
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
