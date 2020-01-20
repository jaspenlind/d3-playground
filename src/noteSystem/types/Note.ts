import { StringConvertible } from "string-converter";
import { Accidential } from ".";

export interface Note extends StringConvertible {
  symbol: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  accidential?: Accidential;
}
