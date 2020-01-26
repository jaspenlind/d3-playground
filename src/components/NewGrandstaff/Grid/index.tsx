import { withStyles } from "@material-ui/core/styles";
import { Component } from "./Component";
import { styles } from "./style.jss";
import { createPosition, Position } from "../types";
export * from "./Props";
export * from "./style.jss";

export const spacing: Position = createPosition({ x: 7 });
export const Grid = withStyles(styles)(Component);
