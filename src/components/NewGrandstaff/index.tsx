import React from "react";
import { Measure } from "./Measure";

export const NewGrandStaff = () => {
  const width = 674;
  return (
    <svg width={1800} height={600} style={{ marginTop: "60px;", marginLeft: "7px" }}>
      <g transform="translate(0, 50) scale(0.3)">
        <Measure type={"start"} />
        <Measure />
        <Measure position={{ x: width }} />
        <Measure position={{ x: width * 2 }} />
        <Measure position={{ x: width * 3 }} />
        />
      </g>
    </svg>
  );
};
