import React from "react";
import { Tile } from "../Tiles";
import { GridLine } from "./Line";
import { Props } from ".";
import { createPosition } from "../types/Position";

export const Component = (props: Props) => {
  const columns: JSX.Element[] = [];
  const { children, classes, dimensions, transform, lines } = props;
  const { height, width } = dimensions;
  for (let x = 0; x < width; x += 1) {
    const tiles: JSX.Element[] = [];

    for (let y = 0; y < height; y += 1) {
      const tile = props.tiles.find(t => t.position.x === x && t.position.y === y);

      const spacing = (tile && tile.spacing) || createPosition({ x: 7 });

      tiles.push(
        <Tile key={`tile-${x}-${y}`} position={{ x, y }} spacing={spacing}>
          <GridLine enabled={lines} position={{ x, y }} dimensions={dimensions} />
          {tile && tile.children}
        </Tile>
      );
    }
    columns.push(<g className={classes.column}>{tiles}</g>);
  }

  return (
    <g className={classes.root} transform={transform}>
      {columns}
      {children}
    </g>
  );
};
