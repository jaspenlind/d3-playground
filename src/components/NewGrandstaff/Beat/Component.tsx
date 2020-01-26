import React from "react";
import { Props } from ".";
import { Note } from "../Note";
import { getNotePosition } from "../Staff";
import { pianoLayout, naturals } from "../../../noteSystem/noteLayouts";
import { Grid } from "../Grid";
import { AccidentialCluster } from "../AccidentialCluster";
import { Dimensions, NoteValue } from "../types";

const layout = pianoLayout();
const { treble } = layout;
const naturalNotes = naturals(treble);

export const Component = (props: Props) => {
  const { values } = props;
  const dimensions = getDimensions(values);

  const tiles = values
    .sort((x, y) => findNaturalIndex(y) - findNaturalIndex(x))
    .map(value => {
      const position = getNotePosition(value.pitch, dimensions);

      const children = [<Note key={value.pitch.toString()} {...value} />];

      return {
        position,
        children: children
      };
    });

  return (
    <g>
      <Grid lines={true} dimensions={dimensions} tiles={tiles} transform={props.transform}>
        <AccidentialCluster notes={values.map(x => x.pitch)} dimensions={dimensions} />
      </Grid>
    </g>
  );
};

const getDimensions = (values: NoteValue[]): Dimensions => {
  return { width: 9, height: 14 };
};

const findNaturalIndex = (value: NoteValue) =>
  naturalNotes.findIndex(n => n.symbol === value.pitch.symbol && n.pitch === value.pitch.pitch);
