import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { Position } from "../types";
import { ClefType } from "../../../noteSystem/types";
export interface Props extends WithStyles<typeof styles> {
  position?: Partial<Position>;
  type: ClefType;
}
