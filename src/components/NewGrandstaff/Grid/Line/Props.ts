import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { Dimensions, Position } from "../../types";

export interface Props extends WithStyles<typeof styles> {
  enabled?: boolean;
  position: Position;
  dimensions: Dimensions;
}

export type LinePosition = "above" | "on" | "below";
