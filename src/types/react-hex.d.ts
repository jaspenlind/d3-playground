declare module "react-hex" {
  import React, { ReactNode } from "react";

  export interface GridPoint {
    props: {
      type: HexType;
      x: number;
      y: number;
      size: number;
    };
    type: HexType;
    gridX: number;
    gridY: number;
    size: number;
    corners: number[];
  }
  export function gridPoint(
    oType: HexType,
    oX: number,
    oY: number,
    size: number,
    gridX: number,
    gridY: number
  ): GridPoint;

  export function gridPoints(
    oType: HexType,
    oX: number,
    oY: number,
    size: number,
    gridWidth: number,
    gridHeight: any
  ): any[];

  export type HexType = "pointy-topped" | "flat-topped";

  export default function Hex(type: HexType, x: number, y: number, size: number): any;
}
