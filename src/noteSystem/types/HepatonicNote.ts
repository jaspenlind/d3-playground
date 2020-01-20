import { Note, Tonic } from ".";

export interface HepatonicNote {
  tonic: Tonic;
  note: Note;
  isLeading: boolean;
}
