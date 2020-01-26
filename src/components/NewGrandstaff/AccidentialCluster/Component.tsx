import React from "react";
import { Props, accidentialPosition } from ".";
import { Accidential } from "../Accidential";
import { Dimensions, NoteValue, Position } from "../types";
import { pianoLayout, naturals } from "../../../noteSystem/noteLayouts";
import { getTilePosition } from "../Tiles";
import { getNotePosition } from "../Notes";
import { PitchedNote } from "../../../noteSystem";
import { translate } from "../utils/transform";

const layout = pianoLayout();
const { treble } = layout;
const naturalNotes = naturals(treble);

export const Component = (props: Props) => {
  const { dimensions, notes, spacing } = props;
  const topToBottom = notes.sort((x, y) => findNaturalIndex(y) - findNaturalIndex(x));
  const accidentials = topToBottom
    .filter(note => note.accidential !== undefined)
    .map(note => {
      const accidentialPositiion = position(note, notes, dimensions, spacing);
      return (
        <g transform={translate(accidentialPositiion)}>
          <Accidential pitch={note} />
        </g>
      );
    });
  return <g>{accidentials}</g>;
};

const findNaturalIndex = (value: PitchedNote) =>
  naturalNotes.findIndex(n => n.symbol === value.symbol && n.pitch === value.pitch);

export const position = (
  note: PitchedNote,
  allNotes: PitchedNote[],
  dimensions: Dimensions,
  gridSpacing?: Position
): Position => {
  const notePosition = getNotePosition(note, dimensions);
  // const tilePosition = getTilePosition(notePosition, gridSpacing);
  const { width } = dimensions;
  const { offset, pushLeft, spacing } = accidentialSettings;
  const startX = notePosition.x === width - 2 ? offset.x : offset.x * 2;

  let x = startX;
  let push = 0;
  for (let i = 0; i < allNotes.length; i += 1) {
    const neighbours = allNotes.slice(i - pushLeft.distance + 1, i).filter(x => x !== undefined);
    const distance = Math.abs(
      Math.min(...neighbours.map(n => getNotePosition(allNotes[i], dimensions).y - getNotePosition(n, dimensions).y))
    );

    if (distance < pushLeft.distance && push < pushLeft.max) {
      push += 1;
      x -= spacing;
    } else {
      push = 0;
      x = startX;
    }
    if (allNotes[i] === note) {
      break;
    }
  }
  const pos = { x: x, y: notePosition.y - offset.y };

  return pos;
  //TODO
  // return getTilePosition(pos, gridSpacing);
};

const accidentialSettings = {
  offset: { x: -32, y: 10 },
  spacing: 20,
  pushLeft: { distance: 2, max: 4 }
};
