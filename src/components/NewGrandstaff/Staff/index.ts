import { pianoLayout, naturals } from "../../../noteSystem/noteLayouts";
import { middleC } from "../../../noteSystem/pitchedNotes";
import { Dimensions, Position } from "../types";
import { translate } from "../utils/transform";
import { PitchedNote } from "../../../noteSystem";

const layout = pianoLayout();
const { treble } = layout;
const naturalNotes = naturals(treble);
const middleCIndex = naturalNotes.indexOf(middleC);

export const getNotePosition = (value: PitchedNote, dimensions: Dimensions): Position => {
  const { height, width } = dimensions;
  const noteIndex = findNaturalIndex(value);
  const oddY = noteIndex % 2 !== 0;
  const oddWidth = width % 2 !== 0;

  const yOffset = height - (oddWidth && oddY ? 0 : 1);
  const x = oddY ? width - 1 : width - 2;
  const y = Math.floor(yOffset - middleCIndex - noteIndex * 0.5);

  return { x, y };
};

const findNaturalIndex = (value: PitchedNote) =>
  naturalNotes.findIndex(n => n.symbol === value.symbol && n.pitch === value.pitch);
