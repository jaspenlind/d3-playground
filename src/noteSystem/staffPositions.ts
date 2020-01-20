import { Clef, NoteLayout, PitchedNote, StaffPosition } from "./types";
import { F3, G4, middleC } from "./pitchedNotes";
import { Bass, Treble } from "./clefs";
import { findNatural, naturals } from "./noteLayouts";

const empty: StaffPosition = Object.freeze({ position: 0, note: middleC });

const create = (meta: Partial<StaffPosition>): Readonly<StaffPosition> => {
  const position = { ...empty, ...meta };

  return Object.freeze(position);
};

export const findIndex = (note: PitchedNote, notes: PitchedNote[]) => {
  return (note && notes.findIndex(x => x.symbol === note.symbol && x.pitch === note.pitch)) || -1;
};

const clefOffset = (clef: Clef) => {
  return clef === Treble ? { value: 2, note: G4 } : { value: -2, note: F3 };
};

// export const numberOfLines = 5;
// const isOnBar = (position: number): boolean => position > 0 && position <= numberOfLines;

export const position = (clef: Clef, note: PitchedNote, layout: NoteLayout): StaffPosition => {
  const naturalNotes = naturals(layout);
  const naturalNote = findNatural(note, layout);

  const offset = clefOffset(clef);
  const gIndex = findIndex(offset.note, naturalNotes) + offset.value;
  const noteIndex = findIndex(naturalNote, naturalNotes);

  const diff = noteIndex - gIndex;
  const pos = diff * 0.5;
  return create({ position: pos, note });
};

export const fPosition = (note: PitchedNote, layout: NoteLayout): StaffPosition => position(Bass, note, layout);

export const gPosition = (note: PitchedNote, layout: NoteLayout): StaffPosition => position(Treble, note, layout);
