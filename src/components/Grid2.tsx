import React from "react";
import Hex, { gridPoints } from "react-hex";

/**{...props} */
export const Grid2 = () => {
  const hexes = gridPoints("pointy-topped", 100, 100, 10, 25, 25).map(({ props }) => (
    <Hex {...props} fill="white" stroke="black" />
  ));

  return (
    <svg width="1000" height="1000">
      {hexes}
    </svg>
  );
};
