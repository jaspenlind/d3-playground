import { withStyles } from "@material-ui/core/styles";
import { Component } from "./Component";
import { styles } from "./styles.jss";
import { createPosition, Position } from "../types";
import { dimensions } from "../Tile";

export * from "./Props";
export * from "./styles.jss";

export const Clef = withStyles(styles)(Component);
