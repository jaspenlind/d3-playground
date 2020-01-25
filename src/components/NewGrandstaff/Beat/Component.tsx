import React from "react";
import { Props } from ".";
import { Note } from "../Notes";
import { pianoLayout, naturals } from "../../../noteSystem/noteLayouts";
import { middleC } from "../../../noteSystem/pitchedNotes";
import { Grid } from "../Grid";
import { Accidential } from "../Accidential";
import { Dimensions, NoteValue, Position } from "../types";
import { translate } from "../utils/transform";

const layout = pianoLayout();
const { treble } = layout;
const naturalNotes = naturals(treble);
const middleCIndex = naturalNotes.indexOf(middleC);

export const Component = (props: Props) => {
  const { values } = props;
  const dimensions = getDimensions(values);

  const tiles = values
    .sort((x, y) => findNaturalIndex(y) - findNaturalIndex(x))
    .map(value => {
      const position = getNotePosition(value, dimensions);
      const { accidential } = value.pitch;
      const children: any[] = [<Note key={value.pitch.toString()} {...value} />];

      if (accidential !== undefined) {
        const accidentialPositiion = getAccidentialPosition(value, values, position, dimensions);

        children.push(
          <g transform={translate(accidentialPositiion)}>
            <Accidential pitch={value.pitch} />
          </g>
        );
      }

      return {
        position,
        children: children
      };
    });

  return <Grid lines={true} dimensions={dimensions} tiles={tiles} transform={props.transform} />;
};

const getDimensions = (values: NoteValue[]): Dimensions => {
  return { width: 9, height: 14 };
};

const getNotePosition = (value: NoteValue, dimensions: Dimensions): Position => {
  const { height, width } = dimensions;
  const noteIndex = findNaturalIndex(value);
  const oddY = noteIndex % 2 !== 0;
  const oddWidth = width % 2 !== 0;

  const yOffset = height - (oddWidth && oddY ? 0 : 1);
  const x = oddY ? width - 1 : width - 2;
  const y = Math.floor(yOffset - middleCIndex - noteIndex * 0.5);

  return { x, y };
};

const getAccidentialPosition = (
  note: NoteValue,
  allNotes: NoteValue[],
  notePosition: Position,
  dimensions: Dimensions
): Position => {
  const { width } = dimensions;
  const { offset, pushLeft, spacing } = accidentialSettings;
  const startX = notePosition.x === width - 2 ? offset.x : offset.x * 2;

  let x = startX;
  let push = 0;
  for (let i = 0; i < allNotes.length; i += 1) {
    const prevTwo = allNotes.slice(i - pushLeft.distance + 1, i).filter(x => x !== undefined); // [allNotes[i - 1], allNotes[i - 2]].filter(x => x !== undefined);
    const distance = Math.abs(
      Math.min(...prevTwo.map(n => getNotePosition(allNotes[i], dimensions).y - getNotePosition(n, dimensions).y))
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
  return { x: x, y: notePosition.y - offset.y };
};

const accidentialSettings = {
  offset: { x: -32, y: 10 },
  spacing: 20,
  pushLeft: { distance: 2, max: 4 }
};

const findNaturalIndex = (value: NoteValue) =>
  naturalNotes.findIndex(n => n.symbol === value.pitch.symbol && n.pitch === value.pitch.pitch);
