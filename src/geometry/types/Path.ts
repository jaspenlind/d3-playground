import { Direction } from ".";

export interface Path {
  directions: Direction[];
  grow(direction: Direction, ...dirs: Direction[]): Path;
}
