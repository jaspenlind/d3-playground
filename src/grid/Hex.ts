export interface Hex {
  q: number;
  r: number;
  s: number;
  equals: (other: Hex) => boolean;
  notEquals: (other: Hex) => boolean;
  add: (other: Hex) => Hex;
  substract: (other: Hex) => Hex;
  multiply: (other: Hex) => Hex;
  length: number;
  distance: (other: Hex) => number;
  directions: Hex[];
  neighbor: (direction: number) => Hex;
}

export const hex = (q: number, r: number, s?: number): Hex => {
  const _q = q | 0;
  const _r = r | 0;
  const _s = (s && s | 0) || -q - r;
  const equals = (other: Hex): boolean => _q === other.q && _r === other.r && _s === other.s;
  const notEquals = (other: Hex): boolean => !equals(other);
  const add = (other: Hex) => hex(_q + other.q, _r + other.r, _s + other.s);
  const substract = (other: Hex) => hex(_q - other.q, _r - other.r, _s - other.s);
  const multiply = (other: Hex) => hex(_q * other.q, _r * other.r, _s * other.s);
  const length = ((Math.abs(_q) + Math.abs(_r) + Math.abs(_s)) / 2) | 0;
  const distance = (other: Hex) => substract(other).length;
  const directions = [hex(1, 0, -1), hex(1, -1, 0), hex(0, -1, 1), hex(-1, 0, 1), hex(-1, 1, 0), hex(0, 1, -1)];
  const neighbor = (direction: number) => add(directions[direction]);

  return {
    q: _q,
    r: _r,
    s: _s,
    equals,
    notEquals,
    add,
    substract,
    multiply,
    length,
    distance,
    directions,
    neighbor
  };
};
