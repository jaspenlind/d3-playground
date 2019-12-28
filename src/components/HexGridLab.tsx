import React from "react";
import { HexGrid, Hexagon, Layout, Text, Path, Pattern, Hex, GridGenerator } from "react-hexgrid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import "./hexgrid.css";

export const HexGridLab = () => {
  const hexagonSize = { x: 10, y: 10 };
  const moreHexas = GridGenerator.parallelogram(-2, 2, -2, 2);
  return (
    <div className="hexlab">
      <HexGrid width={600} height={400} viewBox="-50 -50 100 100">
        {/* Main grid with bit hexagons, all manual */}
        <Layout className="hexlab" size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          <Hexagon q={0} r={0} s={0} />
          {/* Using pattern (defined below) to fill the hexagon */}
          <Hexagon q={0} r={-1} s={1} fill="pat-1" />
          <Hexagon q={0} r={1} s={-1} />
          <Hexagon q={1} r={-1} s={0}>
            <Text>1, -1, 0</Text>
          </Hexagon>
          <Hexagon q={1} r={0} s={-1}>
            <Text>1, 0, -1</Text>
          </Hexagon>
          {/* Pattern and text */}
          <Hexagon q={-1} r={1} s={0} fill="pat-2">
            <Text>-1, 1, 0</Text>
          </Hexagon>
          <Hexagon q={-1} r={0} s={1} />
          <Hexagon q={-2} r={0} s={1} />
          <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
        </Layout>
        {/* Additional small grid, hexagons generated with generator */}
        <Layout size={{ x: 2, y: 2 }} origin={{ x: 50, y: -30 }}>
          {moreHexas.map((hex, i) => (
            <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />
          ))}
        </Layout>
        {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
        <Pattern id="pat-1" link="http://lorempixel.com/400/200/" size={hexagonSize} />
        <Pattern id="pat-2" link="http://lorempixel.com/400/200/" size={hexagonSize} />
        <g>
          <circle cx="50" cy="0" r="10" />
          <circle cx="50" cy="10" r="8" />
          <circle cx="45" cy="20" r="6" />
        </g>
      </HexGrid>
    </div>
  );
};
