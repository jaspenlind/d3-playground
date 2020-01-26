import { withStyles } from "@material-ui/core/styles";
import { Component } from "./Component";
import { styles } from "./style.jss";
import { createPosition, Position } from "../types";
import { dimensions } from "../Tile";

export * from "./Props";
export * from "./style.jss";

export const getTilePosition = (coord: Position) => {
  const { height, width } = dimensions;

  const evenX = coord.x % 2 !== 0;

  return {
    x: (width + spacing.x) * coord.x * 0.75,
    y: (height + spacing.y) * coord.y + (evenX ? height * 0.5 : 0)
  };
};

export const spacing: Position = createPosition({ x: 7 });
export const Grid = withStyles(styles)(Component);
