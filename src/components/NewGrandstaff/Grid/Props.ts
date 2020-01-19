import { ReactNode } from "react";
import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { Dimensions, Position } from "../types";

export interface TileDefinition {
  content?: ReactNode;
  position: Position;
}

export interface Props extends WithStyles<typeof styles> {
  dimensions: Dimensions;
  lines?: boolean;
  transform?: string;
  tiles: TileDefinition[];
}
