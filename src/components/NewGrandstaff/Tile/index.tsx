import { withStyles } from "@material-ui/core/styles";
import { Dimensions } from "../types";
import { styles } from ".";
import { Component } from "./Component";
export * from "./Props";
export * from "./styles.jss";

export const dimensions: Dimensions = { width: 37, height: 22.5 };

export const Tile = withStyles(styles)(Component);
