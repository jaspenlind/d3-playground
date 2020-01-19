import React from "react";
import { Dimensions } from "./types";
import { Grid, TileDefinition } from "./Grid";
import { Note, Whole, Half } from "./Notes";

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
  const { values } = props;
  // const width = props.values.find(x => x.accidential !== undefined) ? 3 : 2;
  const dimensions: Dimensions = { width: 3, height: 14 };

  const tiles: TileDefinition[] = values.map(value => {
    const position = { y: 6, x: 1 }; // TODO Translate from note pitch
    return {
      position,
      content: <Note length={value.length} />
    };
  });
  // const tiles: TileDefinition[] = [{ position: { y: 6, x: 1 }, content: <Half /> }];

  return <Grid lines={true} dimensions={dimensions} tiles={tiles} transform={props.transform} />;
};

export const NewGrandStaff = () => {
  return (
    <svg width={400} height={600} style={{ marginTop: "100px" }}>
      <g transform="translate(0, 100)">
        <Beat values={[{ pitch: "C4", length: 4, accidential: "sharp" }]} />
      </g>
      {/* <g transform="translate(100, 100)">
        <Beat values={[{ pitch: "C4", length: 4, accidential: "sharp" }]} />
      </g> */}
    </svg>
  );
};
