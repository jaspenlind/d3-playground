import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { Position } from "../types";
import { ReactNode } from "react";

export interface Props extends WithStyles<typeof styles> {
  children?: ReactNode;
  position?: Position;
}
