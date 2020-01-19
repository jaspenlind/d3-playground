import { ReactNode } from "react";
import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { Position } from "../types";

export interface Props extends WithStyles<typeof styles> {
  position: Partial<Position>;
  spacing?: Partial<Position>;
  children?: ReactNode;
}
