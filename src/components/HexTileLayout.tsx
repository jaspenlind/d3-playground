import React, { Component } from "react";
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils, HexGrid } from "react-hexgrid";
import "./HexTileLayout.css";

export class HexTileLayout extends Component {
  constructor(props: any) {
    super(props);
    // Initialize hexagons with some text and image
    const hexagons = GridGenerator.parallelogram(-1, 1, -1, 2).map((hexagon, index) => {
      return Object.assign({}, hexagon, {
        text: `#${index}`,
        image: `http://lorempixel.com/400/400/`
      });
    });
    this.state = { hexagons };
  }

  public onDragStart(event: any, source: any) {
    // Could do something on onDragStart as well, if you wish
  }

  // onDragEnd you can do some logic, e.g. to clean up hexagon if drop was success
  public onDragEnd(event: any, source: any, success: boolean) {
    if (!success) {
      return;
    }
    const hexagons = (this.state as any).hexagons as any[];
    // TODO Drop the whole hex from array, currently somethings wrong with the patterns
    // const hexas = hexagons.filter(hex => !HexUtils.equals(targetHex, hex));
    const hexas = hexagons.map(hex => {
      if (HexUtils.equals(source.state.hex, hex)) {
        hex.text = null;
        hex.image = null;
      }
      return hex;
    });
    this.setState({ hexagons: hexas });
  }

  public render() {
    const hexagons = (this.state as any).hexagons as any[];
    return (
      <Layout className="tiles" size={{ x: 8, y: 8 }} flat={false} spacing={1.01} origin={{ x: 40, y: -20 }}>
        {hexagons.map((hex, i) => (
          <Hexagon
            key={i}
            q={hex.q}
            r={hex.r}
            s={hex.s}
            fill={hex.image ? HexUtils.getID(hex) : null}
            data={hex}
            onDragStart={(e: any, h: any) => this.onDragStart(e, h)}
            onDragEnd={(e: any, h: any, s: any) => this.onDragEnd(e, h, s)}
          >
            <Text>{hex.text}</Text>
            {!!hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} />}
          </Hexagon>
        ))}
      </Layout>
    );
  }
}
