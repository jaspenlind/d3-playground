import React from "react";
import { Beat } from "./Beat";

import notes from "../../noteSystem/notes";
import { create, middleC } from "../../noteSystem/pitchedNotes";

export const NewGrandStaff = () => {
  const { Bb, C, Cs, D, Ds, E, Eb, F, Fs, G, Gs, A, Ab } = notes;
  // const values = create(5, Bb, Cs, Ds, Gs)
  //   .concat(create(4, Eb, Fs))
  const values = [middleC]
    .concat(create(4, Ds, Eb, Fs, Gs))
    .concat(create(5, Bb, Cs, Ds, Eb, Fs, Gs))
    .concat(create(7, Ab, Bb))
    .concat(create(6, Ds))
    .map(p => ({ pitch: p, value: 4 }));
  // const values = create(5, Cs, Bb)

  return (
    <svg width={400} height={600} style={{ marginTop: "100px" }}>
      <g transform="translate(0, 100)">
        <Beat values={values} />
        />
      </g>
    </svg>
  );
};
