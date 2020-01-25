import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { PitchedNote } from "../../../noteSystem/types";

export interface Props extends WithStyles<typeof styles> {
  type?: string;
  pitch: PitchedNote;
}
