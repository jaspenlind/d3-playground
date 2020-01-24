import React from "react";
import { Beat } from "./Beat";

import notes from "../../noteSystem/notes";
import { create, middleC } from "../../noteSystem/pitchedNotes";

export const NewGrandStaff = () => {
  const { D, E, F, G } = notes;
  const values = [middleC].concat(create(4, D, E, F, G)).map(p => ({ pitch: p, value: 4 }));

  return (
    <svg width={400} height={600} style={{ marginTop: "100px" }}>
      <g transform="translate(0, 100)">
        <Beat values={values} />
        />
      </g>
    </svg>
  );
};
