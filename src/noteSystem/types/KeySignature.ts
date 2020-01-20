import { StringConvertible } from "string-converter";
import { KeySignatureKey, KeySignatureName, KeySignatureType, Note } from ".";

export interface KeySignature extends StringConvertible {
  name: KeySignatureName;
  majorKey: KeySignatureKey;
  minorKey: KeySignatureKey;
  type: KeySignatureType;
  sharps: Note[];
  flats: Note[];
}
