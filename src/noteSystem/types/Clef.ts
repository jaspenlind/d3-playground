import { ClefSymbol, ClefType } from ".";

export interface Clef {
  type: ClefType;
  symbol: ClefSymbol;
  position: number;
}
