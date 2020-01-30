import React from "react";
import { translate } from "../utils/transform";
import { Props } from ".";
import { Beat } from "../Beat";
import { BarLine } from "../BarLine";
import { Grid } from "../Grid";
import { Clef } from "../Clef";
import notes from "../../../noteSystem/notes";
import { create, middleC } from "../../../noteSystem/pitchedNotes";

const { Bb, C, Cs, D, Ds, E, Eb, F, Fs, G, Gs, A, Ab } = notes;

const beat1Vals = create(5, Cs, Ds, Eb, Fs)
  .concat(create(4, C, Gs, Fs, Eb))
  .map(p => ({ pitch: p, value: 4 }));

const beat2Vals = create(5, Ab, Bb)
  .concat(create(6, E, Eb))
  .map(p => ({ pitch: p, value: 4 }));

export const Component = (props: Props) => {
  const { classes, position, type } = props;
  const startWidth = 235;
  const width = 168;

  if (type === "start") {
    return (
      <g className={classes.root} transform={`${translate(position)}`}>
        <BarLine />
        <Grid dimensions={{ width: 7, height: 14 }} lines={true} />
        <Clef type={"Treble"} position={{ x: 20, y: 154 }} />
      </g>
    );
  }
  return (
    <g className={classes.root} transform={`${translate(position)}`}>
      <BarLine position={{ x: startWidth }} />
      <Beat values={beat1Vals} position={{ x: startWidth }} />
      <Beat values={beat2Vals} position={{ x: width + startWidth }} />
      <Beat position={{ x: width * 2 + startWidth }} />
      <Beat position={{ x: width * 3 + startWidth }} />
      <BarLine position={{ x: width * 4 + startWidth + 1 }} />
    </g>
  );
};
