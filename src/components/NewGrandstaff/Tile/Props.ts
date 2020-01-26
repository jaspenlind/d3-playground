import { ReactNode } from "react";
import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { Position } from "../types";

export interface Props extends WithStyles<typeof styles> {
  coordinate: Position;
  position?: Position;
  children?: ReactNode;
  selectable?: boolean;
}
