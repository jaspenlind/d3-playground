import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { Position } from "../types";
import { ReactNode } from "react";

export type Type = "start" | "regular";
export interface Props extends WithStyles<typeof styles> {
  children?: ReactNode;
  position?: Partial<Position>;
  type?: Type;
}
