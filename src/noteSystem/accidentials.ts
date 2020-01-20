import { Accidential } from "./types";

export const flat: Accidential = Object.freeze({ symbol: "b", type: "flat" });
export const sharp: Accidential = Object.freeze({ symbol: "#", type: "sharp" });
export const doubleflat: Accidential = Object.freeze({ symbol: "bb", type: "doubleflat" });
export const doublesharp: Accidential = Object.freeze({ symbol: "x", type: "doublesharp" });
export const natural: Accidential = Object.freeze({ symbol: "n", type: "natural" });

export default {
  flat,
  sharp,
  doubleflat,
  doublesharp,
  natural
};
