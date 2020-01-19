import React from "react";
import { TileType } from ".";
import { Half, Whole } from "./Notes";

const tileIds = new Map<TileType, string>([["empty", "tile-empty"]]);

export const Use = (props: { type: TileType }) => {
  return <use href={`#${tileIds.get(props.type)}`} />;
};

export const Empty = () => {
  return (
    <path
      d="M24,-8.35494964 L9.77756814,3.23750899 L9.77756814,26.762491 L24,38.3549496 L38.2224319,26.762491 L38.2224319,3.23750899 L24,-8.35494964 Z"
      id="tile-empty"
      stroke="#979797"
      fill="white"
      transform="translate(24.000000, 15.000000) rotate(90.000000) translate(-24.000000, -15.000000) "
    />
  );
};

export const StaffLine = () => {
  return (
    <line id="staffline" x1="0" y1="0.5" x2="48" y2="0.5" stroke-width="1.5" stroke="#000000" stroke-linecap="square" />
  );
};

export const TileOnLine = () => {
  return (
    <g id="tile-online">
      <Use type={"empty"} />
      <g transform="translate(1.000000, 14.500000)">
        <use href="#staffline" />
      </g>
    </g>
  );
};

export const TileAboveLine = () => {
  return (
    <g id="tile-aboveline">
      <Use type={"empty"} />
      <g transform="translate(0.000000, 0.280000)">
        <use href="#staffline" />
      </g>
    </g>
  );
};

export const TileBelowLine = () => {
  return (
    <g id="tile-belowline">
      <Use type={"empty"} />
      <g>
        <use href="#staffline" />
      </g>
    </g>
  );
};

export const WholeNote = () => {
  return (
    <g id="tile-wholenote">
      <Use type={"empty"} />
      <g transform="translate(6.000000, 4.000000)">
        <Whole />
      </g>
    </g>
  );
};

export const HalfNote = () => {
  return (
    <g id="tile-halfnote">
      <Use type={"empty"} />
      <g transform="translate(9, -65.5)">
        <Half />
      </g>
    </g>
  );
};
