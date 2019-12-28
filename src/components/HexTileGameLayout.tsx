import React, { Component } from "react";
import { GridGenerator, Layout, Hexagon, Text, Pattern, HexUtils } from "react-hexgrid";
import "./HexGridGameLayout.css";

export class HexTileGameLayout extends Component {
  constructor(props: any) {
    super(props);
    const hexagons = GridGenerator.hexagon(2);
    // Add custom prop to couple of hexagons to indicate them being blocked
    hexagons[0].blocked = true;
    hexagons[1].blocked = true;
    this.state = { hexagons };
  }

  // onDrop you can read information of the hexagon that initiated the drag
  public onDrop(event: any, source: any, targetProps: any) {
    const hexagons = (this.state as any).hexagons as any[];
    const hexas = hexagons.map(hex => {
      // When hexagon is dropped on this hexagon, copy it's image and text
      if (HexUtils.equals(source.state.hex, hex)) {
        hex.image = targetProps.data.image;
        hex.text = targetProps.data.text;
      }
      return hex;
    });
    this.setState({ hexagons: hexas });
  }

  public onDragStart(event: any, source: any) {
    // If this tile is empty, let's disallow drag
    if (!source.props.data.text) {
      event.preventDefault();
    }
  }

  // Decide here if you want to allow drop to this node
  public onDragOver(event: any, source: any) {
    // Find blocked hexagons by their 'blocked' attribute
    const blockedHexas = (this.state as any).hexagons.filter((h: any) => h.blocked);
    // Find if this hexagon is listed in blocked ones
    const blocked = blockedHexas.find((blockedHex: any) => {
      return HexUtils.equals(source.state.hex, blockedHex);
    });

    const { text } = source.props.data;
    // Allow drop, if not blocked and there's no content already
    if (!blocked && !text) {
      // Call preventDefault if you want to allow drop
      event.preventDefault();
    }
  }

  // onDragEnd you can do some logic, e.g. to clean up hexagon if drop was success
  public onDragEnd(event: any, source: any, success: any) {
    if (!success) {
      return;
    }
    // TODO Drop the whole hex from array, currently somethings wrong with the patterns

    const hexagons = (this.state as any).hexagons as any[];
    // When hexagon is successfully dropped, empty it's text and image
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
      <Layout className="game" size={{ x: 10, y: 10 }} flat={true} spacing={1.08} origin={{ x: -30, y: 0 }}>
        {hexagons.map((hex, i) => (
          <Hexagon
            key={i}
            q={hex.q}
            r={hex.r}
            s={hex.s}
            className={hex.blocked ? "blocked" : null}
            fill={hex.image ? HexUtils.getID(hex) : null}
            data={hex}
            onDragStart={(e: any, h: any) => this.onDragStart(e, h)}
            onDragEnd={(e: any, h: any, s: any) => this.onDragEnd(e, h, s)}
            onDrop={(e: any, h: any, t: any) => this.onDrop(e, h, t)}
            onDragOver={(e: any, h: any) => this.onDragOver(e, h)}
          >
            <Text>{hex.text || HexUtils.getID(hex)}</Text>
            {hex.image && <Pattern id={HexUtils.getID(hex)} link={hex.image} />}
          </Hexagon>
        ))}
      </Layout>
    );
  }
}
