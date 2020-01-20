import { NoteLayout } from ".";

export interface PianoLayout extends NoteLayout {
  bass: NoteLayout;
  treble: NoteLayout;
}
