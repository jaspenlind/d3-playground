import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { Dimensions, Position } from "../types";
import { PitchedNote } from "../../../noteSystem/types";

export interface Props extends WithStyles<typeof styles> {
  notes: PitchedNote[];
  dimensions: Dimensions;
  spacing?: Position;
}
