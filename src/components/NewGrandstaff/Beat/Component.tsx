import React from "react";
import { Props } from ".";
import { Note } from "../Notes";
import { pianoLayout, naturals } from "../../../noteSystem/noteLayouts";
import { middleC } from "../../../noteSystem/pitchedNotes";
import { Grid, TileDefinition } from "../Grid";
import { Dimensions, NoteValue, Position } from "../types";

const layout = pianoLayout();
const { treble } = layout;
const naturalNotes = naturals(treble);
const middleCIndex = naturalNotes.indexOf(middleC);

const getDimensions = (values: NoteValue[]): Dimensions => {
  const accidentials = values.filter(value => value.pitch.accidential !== undefined);
  console.log(accidentials.length);
  return { width: 2 + accidentials.length, height: 14 };
};

const getNotePosition = (value: NoteValue, dimensions: Dimensions): Position => {
  const { height, width } = dimensions;
  const noteIndex = naturalNotes.findIndex(n => n.symbol === value.pitch.symbol);
  const oddY = noteIndex % 2 !== 0;
  const x = oddY ? width - 1 : width - 2;
  const y = Math.floor(height - 1 - middleCIndex - noteIndex * 0.5 + (oddY ? 1 : 0));

  return { x, y };
};

export const Component = (props: Props) => {
  const { classes, values } = props;
  const dimensions = getDimensions(values);
  const hasAccidendial = values.some(value => value.pitch.accidential !== undefined);
  const hiddenColumns = hasAccidendial ? [] : [0];

  const tiles: TileDefinition[] = values.map(value => ({
    position: getNotePosition(value, dimensions),
    children: <Note key={value.pitch.toString()} {...value} />
  }));

  return (
    <Grid hiddenColums={hiddenColumns} lines={true} dimensions={dimensions} tiles={tiles} transform={props.transform} />
  );
};
