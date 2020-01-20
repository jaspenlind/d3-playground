import { Note, KeySignature, KeySignatureType, Scale, ScaleType } from "./types";
import notes, { empty as emptyNote, flats, sharps } from "./notes";
import { byScale, empty as emptyKeySignature } from "./keySignatures";

const { A, As, Bb, B, C, Cs, Db, D, Ds, Eb, E, F, Fs, Gb, G, Gs, Ab } = notes;

export const empty: Scale = Object.freeze({
  name: "empty",
  baseNote: emptyNote,
  type: "Major",
  notes: [],
  toString: () => "",
  getKeySignature: () => emptyKeySignature
});

const create = (meta: Partial<Scale>): Scale => {
  const scale = { ...empty, ...meta };
  const name = `${scale.baseNote.toString()} ${scale.type}`;

  scale.name = name;
  scale.getKeySignature = (type: KeySignatureType) => byScale(scale).filter(x => x.type === type)[0];
  scale.toString = () => name;
  return scale;
};

// enharmonically equivalent
const getEnharmonicEquivalent = (scale: Scale): Scale => {
  // TODO
  return scale;
};

const getRelative = (scale: Scale): Scale => {
  // TODO
  return scale;
};

const getParallell = (scale: Scale): Scale => {
  // TODO
  return scale;
};
//   relativeMajor: MajorScale;
//   parallelMajor: MajorScale;

export const CMajor = create({ baseNote: notes.C, notes: [C, D, E, F, G, A, B] });
export const DMajor = create({ baseNote: notes.D, notes: [D, E, F, G, A, B, Cs] });
export const EMajor = create({ baseNote: notes.E, notes: [E, Fs, Gs, A, B, Cs, Ds] });
export const FMajor = create({ baseNote: notes.E, notes: [F, G, A, Bb, C, D, E] });
export const GMajor = create({ baseNote: notes.G, notes: [G, A, B, C, D, E, Fs] });
export const AMajor = create({ baseNote: notes.A, notes: [A, B, Cs, D, E, Fs, Gs] });
export const BMajor = create({ baseNote: notes.B, notes: [B, Cs, Ds, E, Fs, Gs, As] });
export const FsMajor = create({ baseNote: Fs, notes: [Fs, Gs, As, B, Cs, Ds, sharps.E] });
export const CsMajor = create({
  baseNote: notes.Cs,
  notes: [Cs, Ds, sharps.E, Fs, Gs, As, sharps.B]
});
export const AbMajor = create({
  baseNote: Ab,
  notes: [Ab, Bb, C, Db, Eb, F, G]
});
export const BbMajor = create({ baseNote: Bb, notes: [Bb, C, D, Eb, F, G, A] });
export const CbMajor = create({ baseNote: flats.C, notes: [flats.C, Db, Eb, flats.F, Gb, Ab, Bb] });
export const DbMajor = create({ baseNote: Db, notes: [Db, Eb, F, Gb, Ab, Bb, C] });
export const EbMajor = create({ baseNote: Eb, notes: [Eb, F, G, Ab, Bb, C, D] });
export const GbMajor = create({ baseNote: Gb, notes: [Gb, Ab, Bb, flats.C, Db, Eb, F] });

export const AMinor = create({ type: "Minor", baseNote: A, notes: [A, B, C, D, E, F, G] });
export const EMinor = create({ type: "Minor", baseNote: E, notes: [E, Fs, G, A, B, C, D] });
export const BMinor = create({ type: "Minor", baseNote: B, notes: [B, Cs, D, E, Fs, G, A] });
export const FsMinor = create({ type: "Minor", baseNote: Fs, notes: [Fs, Gs, A, B, Cs, D, E] });
export const CsMinor = create({ type: "Minor", baseNote: Cs, notes: [Cs, Ds, E, Fs, Gs, A, B] });
export const GsMinor = create({ type: "Minor", baseNote: Gs, notes: [Gs, As, B, Cs, Ds, E, Fs] });
export const DsMinor = create({ type: "Minor", baseNote: Ds, notes: [Ds, sharps.E, Fs, Gs, As, B, Cs] });
export const AsMinor = create({ type: "Minor", baseNote: As, notes: [As, sharps.B, Cs, Ds, sharps.E, Fs, Gs] });
export const DMinor = create({ type: "Minor", baseNote: D, notes: [D, E, F, G, A, Bb, C] });
export const GMinor = create({ type: "Minor", baseNote: G, notes: [G, A, Bb, C, D, sharps.E, F] });
export const CMinor = create({ type: "Minor", baseNote: C, notes: [C, D, Eb, F, G, Ab, Bb] });
export const FMinor = create({ type: "Minor", baseNote: F, notes: [F, G, Ab, Bb, C, Db, Eb] });
export const BbMinor = create({ type: "Minor", baseNote: Bb, notes: [Bb, C, Db, Eb, F, Gb, Ab] });
export const EbMinor = create({ type: "Minor", baseNote: Eb, notes: [Eb, F, Gb, Ab, Bb, flats.C, Db] });
export const AbMinor = create({ type: "Minor", baseNote: Ab, notes: [Ab, Bb, flats.C, Db, Eb, flats.F, Gb] });

export default {
  empty,
  CMajor,
  BMajor,
  DMajor,
  EMajor,
  FMajor,
  FsMajor,
  GMajor,
  AMajor,
  CsMajor,
  AbMajor,
  BbMajor,
  CbMajor,
  DbMajor,
  EbMajor,
  GbMajor,
  AMinor,
  EMinor,
  BMinor,
  FsMinor,
  CsMinor,
  GsMinor,
  DsMinor,
  AsMinor,
  DMinor,
  GMinor,
  CMinor,
  FMinor,
  BbMinor,
  EbMinor,
  AbMinor
};
