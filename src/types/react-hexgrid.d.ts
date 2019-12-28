declare module "react-hexgrid" {
  import React from "react";
  export class HexGrid extends React.Component {
    constructor(...args: any[]);

    render(): any;

    static defaultProps: {
      height: number;
      viewBox: string;
      width: number;
      className: string;
    };
  }

  export interface HexagonProps {
    q: number;
    r: number;
    s: number;
    fill: string;
    cellType: string | Object;
  }

  export interface HexagonContext {
    layout: Layout;
  }

  export class Hexagon extends React.Component {
    constructor(props: HexagonProps, context: HexagonContext);
  }

  export class Layout extends React.Component {
    constructor(...args: any[]);

    calculateCoordinates(orientation: any): any;

    getChildContext(): any;

    getPointOffset(corner: any, orientation: any, size: any): any;

    render(): any;

    static LAYOUT_FLAT: {
      b0: number;
      b1: number;
      b2: number;
      b3: number;
      f0: number;
      f1: number;
      f2: number;
      f3: number;
      startAngle: number;
    };

    static LAYOUT_POINTY: {
      b0: number;
      b1: number;
      b2: number;
      b3: number;
      f0: number;
      f1: number;
      f2: number;
      f3: number;
      startAngle: number;
    };

    static defaultProps: {
      flat: boolean;
      origin: {
        x: number;
        y: number;
      };
      size: {
        x: number;
        y: number;
      };
      spacing: number;
    };
  }

  export class Path extends React.Component {
    constructor(...args: any[]);

    getPoints(): any;

    render(): any;
  }

  export class Pattern extends React.Component {
    constructor(...args: any[]);

    render(): any;

    static defaultProps: {
      size: {
        x: number;
        y: number;
      };
    };
  }

  export class Text extends React.Component {
    constructor(...args: any[]);

    render(): any;
  }

  export function GridGenerator(): void;

  export class Hex {
    constructor(q: number, r: number, s: number);
    q: number;
    r: number;
    s: number;
    blocked: boolean;
  }
  //export function Hex(q: any, r: any, s: any): void;

  export function HexUtils(): void;

  export namespace GridGenerator {
    function getGenerator(name: any): any;

    function hexagon(mapRadius: number): Hex[];

    function orientedRectangle(mapWidth: number, mapHeight: number): Hex[];

    function parallelogram(q1: number, q2: number, r1: number, r2: number): Hex[];

    function rectangle(mapWidth: number, mapHeight: number): Hex[];

    function ring(center: number, mapRadius: number): Hex[];

    function spiral(center: number, mapRadius: number): Hex[];

    function triangle(mapSize: any): any;
  }

  export namespace HexGrid {
    namespace propTypes {
      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function viewBox(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function width(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace height {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace viewBox {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace width {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }
    }
  }

  export namespace HexUtils {
    const DIRECTIONS: {
      q: number;
      r: number;
      s: number;
    }[];

    function add(a: any, b: any): any;

    function direction(_direction: any): any;

    function distance(a: any, b: any): any;

    function equals(a: any, b: any): any;

    function getID(hex: any): any;

    function hexLerp(a: any, b: any, t: any): any;

    function hexToPixel(hex: any, layout: any): any;

    function lengths(hex: any): any;

    function lerp(a: any, b: any, t: any): any;

    function multiply(a: any, k: any): any;

    function neighbour(hex: any, direction: any): any;

    function neighbours(hex: any): any;

    function pixelToHex(point: any, layout: any): any;

    function round(hex: any): any;

    function subtract(a: any, b: any): any;
  }

  export namespace Hexagon {
    namespace contextTypes {
      function layout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function points(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace layout {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace points {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }
    }

    namespace propTypes {
      function cellStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function fill(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onDragEnd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onDragOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onDragStart(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onDrop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onMouseEnter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onMouseLeave(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function onMouseOver(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function q(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function r(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function s(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace cellStyle {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace data {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace fill {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace onClick {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace onDragEnd {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace onDragOver {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace onDragStart {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace onDrop {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace onMouseEnter {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace onMouseLeave {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace onMouseOver {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }
    }
  }

  export namespace Layout {
    namespace childContextTypes {
      function layout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function points(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace layout {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace points {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }
    }

    namespace propTypes {
      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function flat(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function origin(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function size(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function spacing(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace flat {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace origin {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace size {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace spacing {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }
    }
  }

  export namespace Path {
    namespace contextTypes {
      function layout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace layout {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }
    }

    namespace propTypes {
      function end(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function layout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function start(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace end {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace layout {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace start {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }
    }
  }

  export namespace Pattern {
    namespace propTypes {
      function id(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function link(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function size(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace size {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }
    }
  }

  export namespace Text {
    namespace propTypes {
      function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function x(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      function y(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

      namespace children {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace className {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace x {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }

      namespace y {
        function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
      }
    }
  }
}
