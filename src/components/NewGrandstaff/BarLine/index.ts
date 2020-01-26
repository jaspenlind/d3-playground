import { withStyles } from "@material-ui/core/styles";
import { Component } from "./Component";
import { styles } from "./styles.jss";

export * from "./styles.jss";
export * from "./Props";

export const BarLine = withStyles(styles)(Component);
