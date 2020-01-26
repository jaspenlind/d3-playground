import { withStyles } from "@material-ui/core/styles";
import { Dimensions } from "../types";
import { styles } from ".";
import { Component, getPosition } from "./Component";
export * from "./Props";
export * from "./styles.jss";

export const dimensions: Dimensions = { width: 37, height: 22.5 };
export const getTilePosition = getPosition;
export const Tile = withStyles(styles)(Component);
