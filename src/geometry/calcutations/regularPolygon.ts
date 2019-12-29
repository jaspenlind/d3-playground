import { Apothem, CirumRadius, Perimeter, Side } from "./types";
/**
 * @param s The length of a side
 * @param n Number of sides
 * @param R The radius (optional)
 */
export const apothem = (s: Side, n: number, R?: CirumRadius) => {
  return typeof R === "undefined"
    ? (s / 2) * Math.tan(((Math.PI * (n - 2)) / 2) * n)
    : (s / 2) * Math.tan(Math.PI / n) * R * Math.cos(Math.PI / n);
};

export const area = (a: Apothem, p: Perimeter) => (a * p) / 2;

/**
 * @param n Number of sides
 * @param R Then radius
 */
export const perimeter = (n: number, R: CirumRadius | Side): Perimeter => {
  return 2 * n * R * Math.sin(180 / n);
};

/**
 * @param p The perimeter length
 * @param n Number of sides
 */
export const side = (p: Perimeter, n: number): Side => p / n;

export const regularPolygon = {
  apothem,
  area,
  perimeter,
  side
};
