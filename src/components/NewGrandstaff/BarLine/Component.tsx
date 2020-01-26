import React from "react";
import { Props } from ".";
import { translate } from "../utils/transform";
export const Component = (props: Props) => {
  const { classes, position } = props;
  return (
    <g className={classes.root} transform={translate(position)}>
      <line className={classes.root} x1={0} x2={0} y1={204} y2={293} />;
    </g>
  );
};
