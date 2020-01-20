import { KeySignature, KeySignatureKey, KeySignatureType, KeySignatureName, Scale, ScaleType } from "./types";
import scales from "./scales";
import { sharps } from "./notes";
// import notes, { create as createNote, flats, sharps, empty as emptyNote } from "./notes";

const emptyKey: KeySignatureKey = { key: scales.empty };
const createKey = (meta: Partial<KeySignatureKey>): KeySignatureKey => {
  return { ...emptyKey, ...meta };
};

export const empty: KeySignature = {
  name: "Zero",
  type: "SharpKeys",
  majorKey: emptyKey,
  minorKey: emptyKey,
  flats: [],
  sharps: []
};

export const create = (meta: Partial<KeySignature>): Readonly<KeySignature> => {
  const signature = { ...empty, ...meta };

  return Object.freeze(signature);
};

export const SharpKeys = [
  create({ name: "Zero", type: "SharpKeys", majorKey: createKey({ key: scales.CMajor }) }),
  create({
    name: "One",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.GMajor }),
    minorKey: createKey({ key: scales.AMinor }),
    sharps: [sharps.F]
  }),
  create({
    name: "Two",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.DMajor }),
    minorKey: createKey({ key: scales.EMinor }),
    sharps: [sharps.F, sharps.C]
  }),
  create({
    name: "Three",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.AMajor }),
    minorKey: createKey({ key: scales.BMinor }),
    sharps: [sharps.F, sharps.C, sharps.G]
  }),
  create({
    name: "Four",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.EMajor }),
    minorKey: createKey({ key: scales.CsMinor }),
    sharps: [sharps.F, sharps.C, sharps.G, sharps.D]
  }),
  create({
    name: "Five",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.BMajor, enharmonicEquivalentKey: scales.CbMajor }),
    minorKey: createKey({ key: scales.GsMinor, enharmonicEquivalentKey: scales.AbMinor }),
    sharps: [sharps.F, sharps.C, sharps.G, sharps.D, sharps.A]
  }),
  create({
    name: "Six",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.FsMajor, enharmonicEquivalentKey: scales.GbMajor }),
    minorKey: createKey({ key: scales.DsMinor, enharmonicEquivalentKey: scales.EbMinor }),
    sharps: [sharps.F, sharps.C, sharps.G, sharps.D, sharps.A, sharps.E]
  }),
  create({
    name: "Seven",
    type: "SharpKeys",
    majorKey: createKey({ key: scales.CsMajor, enharmonicEquivalentKey: scales.DbMajor }),
    minorKey: createKey({ key: scales.AsMinor, enharmonicEquivalentKey: scales.BbMinor }),
    sharps: [sharps.F, sharps.C, sharps.G, sharps.D, sharps.A, sharps.E, sharps.B]
  })
];

export const FlatKeys = [
  create({
    name: "Zero",
    type: "FlatKeys",
    majorKey: createKey({ key: scales.CMajor }),
    minorKey: createKey({ key: scales.AMinor })
  }),
  create({
    name: "One",
    type: "FlatKeys",
    majorKey: createKey({ key: scales.FMajor }),
    minorKey: createKey({ key: scales.DMinor })
  }),
  create({
    name: "Two",
    type: "FlatKeys",
    majorKey: createKey({ key: scales.BbMajor }),
    minorKey: createKey({ key: scales.GMinor })
  }),
  create({
    name: "Three",
    type: "FlatKeys",
    majorKey: createKey({ key: scales.EbMajor }),
    minorKey: createKey({ key: scales.CMinor })
  }),
  create({
    name: "Four",
    type: "FlatKeys",
    majorKey: createKey({ key: scales.AMajor }),
    minorKey: createKey({ key: scales.FMinor })
  }),
  create({
    name: "Five",
    type: "FlatKeys",
    majorKey: createKey({ key: scales.DbMajor, enharmonicEquivalentKey: scales.CsMajor }),
    minorKey: createKey({ key: scales.BbMinor, enharmonicEquivalentKey: scales.AsMinor })
  }),
  create({
    name: "Six",
    type: "FlatKeys",
    majorKey: createKey({ key: scales.GbMajor, enharmonicEquivalentKey: scales.FsMajor }),
    minorKey: createKey({ key: scales.EbMinor, enharmonicEquivalentKey: scales.DsMinor })
  }),
  create({
    name: "Seven",
    type: "FlatKeys",
    majorKey: createKey({ key: scales.CbMajor, enharmonicEquivalentKey: scales.BMajor }),
    minorKey: createKey({ key: scales.AbMinor, enharmonicEquivalentKey: scales.GsMinor })
  })
];

const equals = (first: Scale, second: Scale) => first.baseNote.toString() === second.baseNote.toString();

export const get = (keys: number, type: KeySignatureType): KeySignature => {
  const keysByType = type === "FlatKeys" ? FlatKeys : SharpKeys;
  const index = keys < 0 || keys >= keysByType.length ? 0 : keys;

  return keysByType[index];
};

export const byScale = (scale: Scale): KeySignature[] => {
  return SharpKeys.concat(FlatKeys).filter(
    x =>
      equals(scale, x.majorKey.key) ||
      (x.majorKey.enharmonicEquivalentKey !== undefined && equals(scale, x.majorKey.enharmonicEquivalentKey)) ||
      equals(scale, x.minorKey.key) ||
      (x.minorKey.enharmonicEquivalentKey !== undefined && equals(scale, x.minorKey.enharmonicEquivalentKey))
  );
};
