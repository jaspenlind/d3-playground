import { WithStyles } from "@material-ui/core/styles";
import { styles } from ".";
import { NoteValue } from "../types";

export interface Props extends WithStyles<typeof styles> {
  values: NoteValue[];
  transform?: string;
}
