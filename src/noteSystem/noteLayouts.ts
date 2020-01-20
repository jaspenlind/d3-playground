import { flat, sharp } from "./accidentials";
import { Accidential, Note, PianoLayout, Octave, PitchedNote, NoteLayout } from "./types";
import octave, { create } from "./octaves";
import { middleC } from "./pitchedNotes";
import { isNatural } from "./notes";

const { zero, one, two, three, four, five, six, seven, eight } = octave;

const findPitch = (note: string): number | null => {
  const pitch = parseInt(note.substring(note.length - 1), 10);

  return Number.isNaN(pitch) ? null : pitch;
};

const findAccidential = (note: string): Accidential | null => {
  if (note.length < 2) return null;

  const sign = note[1];

  switch (sign) {
    case "b":
      return flat;
    case "#":
      return sharp;
    default:
      return null;
  }
};

const findNote = (notes: PitchedNote[]) => (note: string): PitchedNote | Note | null => {
  const defaultPitch = 5;
  if (note === "") return null;
  const noteSymbol = note[0].toUpperCase();

  let filter = notes.filter(x => x.symbol === noteSymbol);

  if (filter.length === 0) return null;

  const pitch = findPitch(note) || defaultPitch;
  filter = filter.filter(x => x.pitch === pitch);

  const accidential = findAccidential(note);

  if (accidential !== null) {
    filter = filter.filter(x => x.accidential === accidential);

    return filter.length > 0 ? filter[0] : null;
  }

  filter = filter.filter(x => x.accidential === undefined);

  return filter.length > 0 ? filter[0] : null;
};

export const noteLayout = (notes: PitchedNote[]): NoteLayout => {
  return {
    notes,
    octaves: [],
    findNote: findNote(notes)
  };
};

export const findNatural = (note: PitchedNote, layout: NoteLayout): PitchedNote => {
  const natural = layout.notes.find(x => x.symbol === note.symbol && x.pitch === note.pitch && isNatural(x));

  return natural as PitchedNote;
};

export const naturals = (layout: NoteLayout): PitchedNote[] => layout.notes.filter(isNatural);

export const pianoLayout = (): PianoLayout => {
  const [A0, As0, Bb0, B0] = zero.notes;
  const [A8, As8, Bb8, B8, C8] = eight.notes;
  const splitZero = create(0, [A0, As0, Bb0, B0]);
  const splitEight = create(8, [A8, As8, Bb8, B8, C8]);
  const octaves: Octave[] = [splitZero, one, two, three, four, five, six, seven, splitEight];
  const notes: PitchedNote[] = octaves.flatMap(x => x.notes);

  const middleCIndex = notes.indexOf(middleC);
  const bassNotes = notes.slice(0, middleCIndex + 1);
  const trebleNotes = notes.slice(middleCIndex);

  return {
    octaves,
    notes,
    findNote: findNote(notes),
    bass: noteLayout(bassNotes),
    treble: noteLayout(trebleNotes)
  };
};
