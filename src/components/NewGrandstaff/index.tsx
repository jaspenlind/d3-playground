import React from "react";
import { Beat } from "./Beat";
import notes from "../../noteSystem/notes";
import { create, middleC } from "../../noteSystem/pitchedNotes";
export const NewGrandStaff = () => {
  const [note, note2, note3] = create(4, notes.D, notes.E, notes.Fs);
  const fifths = create(5, notes.A, notes.C, notes.E, notes.G);
  return (
    <svg width={400} height={600} style={{ marginTop: "100px" }}>
      <g transform="translate(0, 100)">
        <Beat
          values={[
            { pitch: middleC, value: 4 },
            { pitch: note, value: 4 },
            { pitch: note2, value: 4 },
            { pitch: note3, value: 4 }
          ].concat(fifths.map(f => ({ pitch: f, value: 4 })))}
        />
      </g>
    </svg>
  );
};
