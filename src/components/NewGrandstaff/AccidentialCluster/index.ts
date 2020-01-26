import { withStyles } from "@material-ui/core/styles";
import { Component, position } from "./Component";
import { styles } from "./styles.jss";

export * from "./styles.jss";
export * from "./Props";
export const accidentialPosition = position;
export const AccidentialCluster = withStyles(styles)(Component);
