import React from "react";
import { Tile } from "../Tiles";
import { GridLines } from "./Lines";

import { Props } from "./Props";

export const Component = (props: Props) => {
  const tiles: JSX.Element[] = [];
  const { classes, dimensions, transform, lines } = props;
  const { height, width } = dimensions;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const tile = props.tiles.find(t => t.position.x === x && t.position.y === y);
      tiles.push(
        <Tile position={{ x, y }} spacing={{ x: 7 }}>
          <GridLines enabled={lines} position={{ x, y }} dimensions={dimensions} />
          {tile && tile.content}
        </Tile>
      );
    }
  }

  return (
    <g className={classes.root} transform={transform}>
      {tiles}
    </g>
  );
};
