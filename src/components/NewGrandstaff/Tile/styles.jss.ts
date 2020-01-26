import { createStyles } from "@material-ui/core/styles";

export const styles = createStyles({
  root: {
    ".selectable&:hover > $chrome": {
      cursor: "pointer",
      stroke: "#979797"
    }
  },
  chrome: {
    // stroke: "lightgrey",
    fill: "transparent"
  },
  content: {}
});
