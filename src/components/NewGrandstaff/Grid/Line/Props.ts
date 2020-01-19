import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";

export type LinePosition = "above" | "on" | "below";

export interface Props extends WithStyles<typeof styles> {
  position: LinePosition;
}
