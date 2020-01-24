import React from "react";
import { Beat } from "./Beat";

import notes from "../../noteSystem/notes";
import { create, middleC } from "../../noteSystem/pitchedNotes";

export const NewGrandStaff = () => {
  const { Cs, D, E, F, Fs, G, Gs } = notes;
  const values = [middleC]
    .concat(create(4, D, E, F, G))
    .concat(create(5, Cs, D))
    .map(p => ({ pitch: p, value: 4 }));

  console.log(values.map(x => x.pitch));
  return (
    <svg width={400} height={600} style={{ marginTop: "100px" }}>
      <g transform="translate(0, 100)">
        <Beat values={values} />
        />
      </g>
    </svg>
  );
};
