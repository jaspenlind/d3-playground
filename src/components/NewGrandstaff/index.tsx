import React from "react";
import { Dimensions, NoteValue } from "./types";
import { Grid, TileDefinition } from "./Grid";
import { Note } from "./Notes";
import { pianoLayout, naturals } from "../../noteSystem/noteLayouts";
import notes from "../../noteSystem/notes";
import { create, middleC } from "../../noteSystem/pitchedNotes";

export interface BeatProps {
  values: NoteValue[];
  transform?: string;
}

const layout = pianoLayout();
const { treble } = layout;
const nateralNotes = naturals(treble);
const middleCIndex = nateralNotes.indexOf(middleC);

export const Beat = (props: BeatProps) => {
  const { values } = props;
  const dimensions: Dimensions = { width: 2, height: 14 };
  const tiles: TileDefinition[] = values.map(value => {
    const noteIndex = nateralNotes.findIndex(n => n.toString() === value.pitch.toString());
    const oddY = noteIndex % 2 !== 0;
    const x = oddY ? 1 : 0;
    const y = Math.floor(dimensions.height - 1 - middleCIndex - noteIndex * 0.5) + (oddY ? 1 : 0);

    return {
      position: { x, y },
      children: <Note key={value.pitch.toString()} {...value} />
    };
  });

  return <Grid lines={true} dimensions={dimensions} tiles={tiles} transform={props.transform} />;
};

export const NewGrandStaff = () => {
  const [note, note2, note3] = create(4, notes.D, notes.E, notes.F);
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
