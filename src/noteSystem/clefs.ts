import { Clef } from "./types";

export const Treble: Clef = Object.freeze({ type: "Treble", symbol: "G", position: 2 });
export const Bass: Clef = Object.freeze({ type: "Bass", symbol: "F", position: 4 });
// export const Alto: Clef = Object.freeze({ type: "Alto", symbol: "C", position: 3 });
// export const Tenor: Clef = Object.freeze({ type: "Tenor", symbol: "C", position: 4 });

export default {
  Treble,
  Bass
  // Alto,
  // Tenor
};
