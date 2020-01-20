import { PitchedNote } from ".";

export interface NoteStaffOld {
  getPosition: (note: PitchedNote) => number;
}
