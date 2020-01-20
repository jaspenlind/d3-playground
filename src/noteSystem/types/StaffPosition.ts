import { PitchedNote } from ".";

export interface StaffPosition {
  position: number;
  // line?: number;
  // space?: number;
  // ledger?: Ledger;
  note: PitchedNote;
}
