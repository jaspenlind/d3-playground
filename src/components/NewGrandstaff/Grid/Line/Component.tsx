import React from "react";
import { LinePosition, Props } from "./Props";
import { dimensions } from "../../Tile";

const lineStart = 7;
const lineMiddleC = lineStart + 6;

export const Component = (props: Props) => {
  const { classes } = props;
  const pos = getPosition(props);
  const enabled = shouldRender(props);

  return <g className={classes.root}>{enabled && <Line className={classes.root} position={pos} />}</g>;
};

const Line = (props: { className: string; position: LinePosition }) => {
  const { className, position } = props;

  let y = 1;
  if (position === "on") {
    y = dimensions.height / 2 + 1;
  } else if (position === "below") {
    y = dimensions.height + 1;
  }

  return (
    <g transform={`translate(0,${y})`}>
      <line className={className} x1="0" y1="0" x2={dimensions.width} y2="0" />
    </g>
  );
};

const getPosition = (props: Props): LinePosition => {
  const {
    position: { x },
    dimensions: { width }
  } = props;

  let position: LinePosition = "on";

  const oddX = x % 2 !== 0;
  const oddWidth = width % 2 !== 0;

  if (oddWidth && !oddX) {
    position = "below";
  } else if (!oddWidth && oddX) {
    position = "above";
  }

  return position;
};

const shouldRender = (props: Props) => {
  const {
    dimensions: { width },
    enabled,
    position: { x, y },
    tileHasContent
  } = props;

  const isStaffLine = y > lineStart && y < lineMiddleC;
  const isMiddleCPosition = y === lineMiddleC && width - 2 === x;

  return enabled && (isStaffLine || (isMiddleCPosition && tileHasContent));
};
