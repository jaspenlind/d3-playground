import { hex, Hex } from "./Hex";

export interface FractionalHex {
  round: () => Hex;
}

export const fractionalHex = (q: number, r: number, s: number): FractionalHex => {
  const round = () => {
    let _q = q | 0;
    let _r = r | 0;
    let _s = s | 0;
    const qDiff = Math.abs(_q - q);
    const rDiff = Math.abs(_r - r);
    const sDiff = Math.abs(_s - s);

    if (qDiff > rDiff && qDiff > sDiff) {
      _q = -_r - _s;
    } else if (rDiff > sDiff) {
      _r = -_q - _s;
    } else {
      _s = -_q - _r;
    }

    return hex(_q, _r, _s);
  };
  return {
    round
  };
};
