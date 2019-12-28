import React, { useRef, useEffect } from "react";
import LSystem from "lindenmayer";
// eslint-disable-next-line @typescript-eslint/no-var-requires
//const LSystem = require("lindenmayer");

export const Lidenmayer = (props: any) => {
  const ref = useRef<any>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    // translate to center of canvas
    ctx.translate(canvas.width / 2, canvas.height / 4);
    const koch = new LSystem({
      axiom: "F++F++F",
      productions: { F: "F-F++F-F" },
      finals: {
        "+": () => {
          ctx.rotate((Math.PI / 180) * 60);
        },
        "-": () => {
          ctx.rotate((Math.PI / 180) * -60);
        },
        F: () => {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, 40 / (koch.iterations + 1));
          ctx.stroke();
          ctx.translate(0, 40 / (koch.iterations + 1));
        }
      }
    });

    const cantorSet = new LSystem({
      axiom: "A",
      productions: {
        A: "A+BF++BF-FA--FAFA-BF+",
        B: "-FA+BFBF++BF+FA--FA-B"
      },
      finals: {
        "+": () => {
          ctx.rotate((Math.PI / 180) * 307);
        },
        "-": () => {
          ctx.rotate((Math.PI / 180) * -307);
        },
        F: () => {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, 40 / (cantorSet.iterations + 1));
          ctx.stroke();
          ctx.translate(0, 40 / (cantorSet.iterations + 1));
        }
      }
    });
    cantorSet.iterate(3);
    cantorSet.final();
    // koch.iterate(3);
    // koch.final();
  }, [props.data]);

  return <canvas ref={ref} id="canvas" width="960" height="500"></canvas>;
};
