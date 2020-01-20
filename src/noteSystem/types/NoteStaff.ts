import { Clef, KeySignature, StaffPosition, TimeSignature } from ".";

export interface NoteStaff {
  keySignature: KeySignature;
  clef: Clef;
  timeSignature: TimeSignature;
  positions: StaffPosition[];
}
