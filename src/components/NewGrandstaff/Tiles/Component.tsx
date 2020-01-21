import React from "react";
import { createPosition } from "../types";
import { translate } from "../utils/transform";
import { dimensions, Props } from ".";

export const Component = (props: Props) => {
  const { classes, children } = props;
  const { height, width } = dimensions;

  const position = createPosition(props.position);
  const spacing = createPosition(props.spacing);
  const evenX = position.x % 2 !== 0;

  const tilePosition = {
    x: (width + spacing.x) * position.x * 0.75,
    y: (height + spacing.y) * position.y + (evenX ? height * 0.5 : 0)
  };

  const markup = (
    <g className={classes.root} transform={translate(tilePosition)}>
      <path
        className={classes.chrome}
        d="M19.8979592,-6.27471275 L8.43598329,2.87708347 L8.43598329,21.4979165 L19.8979592,30.6497127 L31.3599351,21.4979165 L31.3599351,2.87708347 L19.8979592,-6.27471275 Z"
        transform="translate(19.897959, 12.187500) rotate(90.000000) translate(-19.897959, -12.187500) "
      >
        <title>
          x: {position.x}, y: {position.y}
        </title>
      </path>
      <g className={classes.content}>{children}</g>
    </g>
  );

  return markup;
};
