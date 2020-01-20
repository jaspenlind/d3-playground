import { StringConvertible } from "string-converter";
import { KeySignature, KeySignatureType, Note, ScaleType } from ".";

export interface Scale extends StringConvertible {
  name: string;
  baseNote: Note;
  type: ScaleType;
  notes: Note[];
  getKeySignature: (type: KeySignatureType) => KeySignature;
}

// export interface MajorScale extends Scale {
//   type: "Major";
//   relativeMinor: MinorScale;
//   parallellMinor: MinorScale;
// }

// export interface MinorScale extends Scale {
//   type: "Minor";
//   relativeMajor: MajorScale;
//   parallelMajor: MajorScale;
// }
