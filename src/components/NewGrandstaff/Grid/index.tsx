import { withStyles } from "@material-ui/core/styles";
import { Component } from "./Component";
import { styles } from "./style.jss";

export * from "./Props";
export * from "./style.jss";

export const Grid = withStyles(styles)(Component);
