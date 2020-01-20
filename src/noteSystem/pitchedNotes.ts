import { Note, PitchedNote } from "./types";
import { C, F, G } from "./notes";

const createNote = (note: Note, pitch: number): Readonly<PitchedNote> => {
  const noteAsPitched = note as PitchedNote;

  if (typeof noteAsPitched.pitch !== "undefined") return noteAsPitched;

  const name = `${note.toString()}${pitch}`;

  const pitched = { ...{ pitch }, ...note };

  pitched.toString = () => name;

  return Object.freeze(pitched);
};

export const middleC = createNote(C, 4);
export const F3 = createNote(F, 3);
export const G4 = createNote(G, 4);

const fixedNotes = [middleC, F3, G4];

export const create = (pitch: number, ...notes: Note[]): PitchedNote[] => {
  return notes.map(x => {
    const fixedNote = fixedNotes.find(
      f => f.symbol === x.symbol && f.accidential === x.accidential && f.pitch === pitch
    );

    return fixedNote || createNote(x, pitch);
  });
};

export default {
  middleC,
  F3,
  G4,
  create
};
