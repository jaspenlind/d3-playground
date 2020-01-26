import React from "react";
import { translate } from "../utils/transform";
import { Props } from ".";
import { Beat } from "../Beat";
import { BarLine } from "../BarLine";
import notes from "../../../noteSystem/notes";
import { create, middleC } from "../../../noteSystem/pitchedNotes";

const { Bb, C, Cs, D, Ds, E, Eb, F, Fs, G, Gs, A, Ab } = notes;

const beat1Vals = [middleC]

  .concat(create(5, C, Bb))
  .concat(create(4, Ds, F))
  .map(p => ({ pitch: p, value: 4 }));

const beat2Vals = create(5, Ab, Bb)
  .concat(create(4, E))
  .map(p => ({ pitch: p, value: 4 }));

export const Component = (props: Props) => {
  const { classes, position } = props;
  const width = 168;
  return (
    <g className={classes.root} transform={`${translate(position)} scale(0.5)`}>
      <BarLine />
      <Beat values={beat1Vals} />
      <Beat values={beat2Vals} position={{ x: width }} />
      <Beat position={{ x: width * 2 }} />
      <Beat position={{ x: width * 3 }} />
      <BarLine position={{ x: width * 4 + 1 }} />
    </g>
  );
};
