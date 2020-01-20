import { Bar, NoteStaff, Tempo } from ".";

export interface Score {
  tempo: Tempo;
  staff: NoteStaff;
  bars: Bar[];
}
