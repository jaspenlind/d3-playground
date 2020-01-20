import { Note, Octave, PitchedNote } from ".";

export interface NoteLayout {
  octaves: Octave[];
  notes: PitchedNote[];
  findNote: (note: string) => PitchedNote | Note | null;
}
