import React from "react";
import { Tile } from "../Tiles";
import { GridLine } from "./Line";

import { Props } from "./Props";

export const Component = (props: Props) => {
  const columns: JSX.Element[] = [];
  const { classes, dimensions, hiddenColums, transform, lines } = props;
  const { height, width } = dimensions;

  for (let x = 0; x < width; x += 1) {
    const tiles: JSX.Element[] = [];

    for (let y = 0; y < height; y += 1) {
      const tile = props.tiles.find(t => t.position.x === x && t.position.y === y);
      tiles.push(
        <Tile key={`tile-${x}-${y}`} position={{ x, y }} spacing={{ x: 7 }}>
          <GridLine enabled={lines} position={{ x, y }} dimensions={dimensions} />
          {tile && tile.children}
        </Tile>
      );
    }

    const visibility = hiddenColums && hiddenColums.includes(x) ? "hidden" : "visible";

    columns.push(
      <g visibility={visibility} className={classes.column}>
        {tiles}
      </g>
    );
  }

  return (
    <g className={classes.root} transform={transform}>
      {columns}
    </g>
  );
};
