import { Note, PitchedNote } from "./types";
import accidentials, { flat, sharp } from "./accidentials";

export const empty: Note = { symbol: "C", toString: () => "" };

export const create = (meta: Partial<Note>): Readonly<Note> => {
  const note = {
    ...empty,
    ...meta
  };
  const accidential = (note.accidential && note.accidential.symbol) || "";
  note.toString = () => `${note.symbol}${accidential}`;

  return Object.freeze(note);
};

export const A = create({ symbol: "A" });
export const As = create({ symbol: "A", accidential: sharp });
export const Bb = create({ symbol: "B", accidential: flat });
export const B = create({ symbol: "B" });
export const Bs = create({ symbol: "B", accidential: sharp });
export const Cb = create({ symbol: "C", accidential: flat });
export const C = create({ symbol: "C" });
export const Cs = create({ symbol: "C", accidential: sharp });
export const Db = create({ symbol: "D", accidential: flat });
export const D = create({ symbol: "D" });
export const Ds = create({ symbol: "D", accidential: sharp });
export const Eb = create({ symbol: "E", accidential: flat });
export const E = create({ symbol: "E" });
export const Es = create({ symbol: "E", accidential: sharp });
export const Fb = create({ symbol: "F", accidential: flat });
export const F = create({ symbol: "F" });
export const Fs = create({ symbol: "F", accidential: sharp });
export const Gb = create({ symbol: "G", accidential: flat });
export const G = create({ symbol: "G" });
export const Gs = create({ symbol: "G", accidential: sharp });
export const Ab = create({ symbol: "A", accidential: flat });

const all = [A, As, Bb, B, Bs, Cb, Cs, Db, D, Ds, Eb, E, Es, Fb, F, Fs, Gb, G, Gs, Ab];

export const pitchless = (note: PitchedNote): Note => {
  return (
    all.find(x => x.symbol === note.symbol && x.accidential === note.accidential) ||
    create({ symbol: note.symbol, accidential: note.accidential })
  );
};

export const isNatural = (note: Note): boolean =>
  note.accidential === undefined || note.accidential === accidentials.natural;

export const flats = {
  C: Cb,
  B: Bb,
  D: Db,
  E: Eb,
  F: Fb,
  G: Gb,
  A: Ab
};

export const sharps = {
  A: As,
  B: Bs,
  C: Cs,
  D: Ds,
  E: Es,
  F: Fs,
  G: Gs
};

export default {
  A,
  As,
  Bb,
  B,
  C,
  Cs,
  Db,
  D,
  Ds,
  Eb,
  E,
  F,
  Fs,
  Gb,
  G,
  Gs,
  Ab,
  create,
  isNatural
};
