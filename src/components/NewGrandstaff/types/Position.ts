export interface Position {
  x: number;
  y: number;
}

export const createPosition = (position?: Partial<Position>) => ({ ...{ x: 0, y: 0 }, ...position });
