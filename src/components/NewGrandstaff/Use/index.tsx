import React from "react";
import { Empty, HalfNote, WholeNote, TileBelowLine, TileAboveLine, TileOnLine, StaffLine } from "./TileDefinitions";

export interface Position {
  x: number;
  y: number;
}
export type LinePosition = "on" | "below" | "above";
export type TileType = "empty" | "wholenote" | "halfnote";
export interface Props {
  type: TileType;
  position: Position;
}

const size = { width: 47, height: 29 };

// const tileHref = ()

export const TileWithUse = (props: Props) => {
  const { type, position } = props;
  const x = size.width * position.x * 0.75;
  let y = size.height * position.y;
  let id = "#tile-aboveline";
  if (position.x % 2 === 0) {
    y += size.height * 0.5;
    id = "#tile-online";
  }

  return <use href={`#tile-${type}`} transform={`translate(${x} ${y})`}></use>;
  // return <use href={id} transform={`translate(${x} ${y})`}></use>;
};

const randomType = (): TileType => {
  const val = Math.floor(Math.random() * Math.floor(8));
  if (val === 0) {
    return "wholenote";
  } else if (val === 1) {
    return "halfnote";
  }

  return "empty";
};

export interface TileDefinition {
  type: TileType;
  position: Position;
}

export interface GridLayoutProps {
  height: number;
  width: number;
  transform?: string;
  tiles: TileDefinition[];
}

export const GridLayoutWithUse = (props: GridLayoutProps) => {
  const layout: JSX.Element[] = [];
  const { height, width, tiles, transform } = props;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const tile = tiles.find(t => t.position.y === y && t.position.x === x);
      // const type = (tile && tile.type) || "empty";
      layout.push(<TileWithUse position={{ x, y }} type={randomType()} />);
    }
  }

  return <g transform={transform}>{layout}</g>;
};

export interface NoteValue {
  pitch: string;
  accidential?: string;
  length: number;
}

export interface BeatProps {
  values: NoteValue[];
  transform?: string;
}

export const Beat = (props: BeatProps) => {
  // const width = props.values.find(x => x.accidential !== undefined) ? 3 : 2;
  const width = 2;
  const height = 14;

  const tiles: TileDefinition[] = [{ position: { y: 0, x: 1 }, type: "wholenote" }];
  // 9
  return <GridLayoutWithUse height={height} width={width} tiles={tiles} transform={props.transform} />;
};

export const StaffWithUse = () => {
  const tiles: TileDefinition[] = [
    { position: { y: 1, x: 1 }, type: "wholenote" },
    { position: { y: 2, x: 1 }, type: "wholenote" },
    { position: { y: 2, x: 0 }, type: "wholenote" }
  ];
  return (
    <svg width={400} height={500} style={{ marginTop: "200px" }}>
      <defs>
        <Empty />
        <WholeNote />
        <HalfNote />
        <StaffLine />
        <TileBelowLine />
        <TileAboveLine />
        <TileOnLine />
      </defs>
      {/* <Beat values={[{ pitch: "C4", length: 4, accidential: "sharp" }]} /> */}
      {/* <Beat values={[{ pitch: "C4", length: 4 }]} transform="translate(70 0)" /> */}
      <GridLayoutWithUse height={10} width={10} tiles={tiles} transform="translate(0,100)"></GridLayoutWithUse>
    </svg>
  );
};
