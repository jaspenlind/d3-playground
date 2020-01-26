import { createPosition, Position } from "../types";

export const translate = (position?: Partial<Position>) => {
  const { x, y } = createPosition(position);
  return `translate(${x} ${y})`;
};
