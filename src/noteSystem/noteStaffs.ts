import {
  Clef,
  GrandStaff,
  KeySignature,
  NoteLayout,
  NoteStaff,
  NoteStaffOld,
  PianoLayout,
  PitchedNote,
  StaffPosition,
  TimeSignature
} from "./types";
import { middleC } from "./pitchedNotes";
import { fPosition, gPosition } from "./staffPositions";

export const timeSignature: TimeSignature = {
  name: "temp"
};

// export const staff = (
//   layout: NoteLayout,
//   keySignature: KeySignature,
//   clef: Clef,
//   timesSignature: TimeSignature
// ): NoteStaff => {
//   const clefStaff = clefToStaffMappings.get(clef.symbol);

//   const positions = (clefStaff && clefStaff.getStaffPositions(layout)) || [];
//   // const positions = layout.notes.filter(x => x.accidential === undefined).map(x => staffPosition(x, layout, clef));

//   return {
//     keySignature,
//     clef,
//     timeSignature: timesSignature,
//     positions
//   };
// };

export const grandStaff = (layout: PianoLayout): GrandStaff => {
  const upperPositions = layout.treble.notes.map(x => gPosition(x, layout.treble));
  const lowerPositions = layout.bass.notes.map(x => fPosition(x, layout.bass));

  return {
    treble: upperPositions,
    bass: lowerPositions
  };
};

export const noteStaff = (layout: NoteLayout): NoteStaffOld => {
  const notesWithoutAccidentials = layout.notes.filter(x => x.accidential === undefined);
  const middleCIndex = notesWithoutAccidentials.indexOf(middleC);

  const getPosition = (note: PitchedNote): number => {
    const noteIndex = notesWithoutAccidentials.findIndex(x => x.symbol === note.symbol && x.pitch === note.pitch);

    return middleCIndex - noteIndex;
  };

  return {
    getPosition
  };
};
