import React from "react";
import { Props } from ".";
import { Note } from "../Notes";
import { pianoLayout, naturals } from "../../../noteSystem/noteLayouts";
import { middleC } from "../../../noteSystem/pitchedNotes";
import { Grid, TileDefinition } from "../Grid";
import { Accidential } from "../Accidential";
import { Dimensions, NoteValue, Position } from "../types";

const layout = pianoLayout();
const { treble } = layout;
const naturalNotes = naturals(treble);
const middleCIndex = naturalNotes.indexOf(middleC);

export const Component = (props: Props) => {
  const { values } = props;
  const dimensions = getDimensions(values);

  const tiles = values.reduce<TileDefinition[]>((acc, curr) => {
    const position = getNotePosition(curr, dimensions);
    acc.push({
      position,
      children: <Note key={curr.pitch.toString()} {...curr} />
    });

    const { accidential } = curr.pitch;
    if (accidential !== undefined) {
      acc.push({
        position: { ...position, ...{ x: 0 } },
        children: <Accidential />
      });
    }
    return acc;
  }, []);

  return <Grid lines={true} dimensions={dimensions} tiles={tiles} transform={props.transform} />;
};

const getDimensions = (values: NoteValue[]): Dimensions => {
  //const accidentials = values.filter(value => value.pitch.accidential !== undefined);
  return { width: 3, height: 14 };
  // return { width: 2 + accidentials.length, height: 14 };
};

const getNotePosition = (value: NoteValue, dimensions: Dimensions): Position => {
  const { height, width } = dimensions;
  const noteIndex = naturalNotes.findIndex(n => n.symbol === value.pitch.symbol && n.pitch === value.pitch.pitch);
  const oddY = noteIndex % 2 !== 0;
  const oddWidth = width % 2 !== 0;

  const yOffset = height - (oddWidth && oddY ? 0 : 1);
  const x = oddY ? width - 1 : width - 2;
  const y = Math.floor(yOffset - middleCIndex - noteIndex * 0.5);

  console.log(value.pitch.toString() + " = " + x + ", " + y + " (" + noteIndex + ")");
  return { x, y };
};
