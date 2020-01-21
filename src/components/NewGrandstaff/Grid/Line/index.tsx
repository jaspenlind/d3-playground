import { withStyles } from "@material-ui/core/styles";
import { Component } from "./Component";
import { styles } from "./styles.jss";

export * from "./Props";
export * from "./styles.jss";

export const GridLine = withStyles(styles)(Component);
