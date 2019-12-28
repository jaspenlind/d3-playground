// Origin of source: https://eng.qualia.com/drawing-fractals-in-the-browser-with-l-systems-and-es6-6cecfd74e084
// Author: Travis Geis, Qualia

class Point {
  constructor(xOrPoint, y) {
    if (xOrPoint.x !== undefined && xOrPoint.y !== undefined) {
      this.x = xOrPoint.x;
      this.y = xOrPoint.y;
    } else {
      this.x = xOrPoint;
      this.y = y;
    }
  }
}

class DrawingState {
  constructor(position, direction) {
    this.state = Object.create(null);
    this.state.position = (position && new Point(position.x, position.y)) || new Point(0, 0);
    this.state.direction = direction || 0; // right
    this.stack = [];
  }

  push() {
    this.stack.push(JSON.stringify(this.state));
  }

  pop() {
    this.state = JSON.parse(this.stack.pop() || "{}");
  }

  get depth() {
    return this.stack.length;
  }
}

function drawForward(drawingState, params) {
  const { x, y } = drawingState.state.position;
  const d = drawingState.state.direction;
  const newX = x + params.length * cos(d);
  const newY = y + params.length * sin(d);
  push();
  strokeWeight(drawingState.state.strokeWeight || 1);
  line(x, y, newX, newY);
  pop();
  drawingState.state.position.x = newX;
  drawingState.state.position.y = newY;
}
/**export const gosperLike: LSystem = {
  variables: ["A", "B", "F"],
  axiom: "A",
  steps: 3,
  rules: new Map<string, string>([
    ["A", "A+BF++BF-FA--FAFA-BF+"],
    ["B", "-FA+BFBF++BF+FA--FA-B"]
  ])
}; */
const fractalPlant = {
  params: {
    angle: 25,
    length: 2
  },
  axiom: "X",
  rules: {
    X: "F[-X][X]F[-X]+FX",
    F: "FF"
  },
  steps: 6
};

const serpinskiTriangle = {
  params: {
    angle: 120,
    length: 30
  },
  axiom: "F[-G]-[G]",
  rules: {
    F: "F[−G]+F+G[−F]",
    G: "GG"
  },
  steps: 8
};
binaryTree = {
  params: {
    angle: 25,
    length: 30
  },
  axiom: "0",
  rules: {
    "1": "11",
    "0": "1[0]0"
  },
  steps: 7
};

cantorSet = {
  params: {
    angle: 90,
    length: 100
  },
  axiom: "A",
  rules: {
    A: "ABA",
    B: "BBB"
  },
  steps: 8
};

commands = {
  F: drawForward,
  "-"(drawingState, params) {
    drawingState.state.direction -= params.angle;
  },
  "+"(drawingState, params) {
    drawingState.state.direction += params.angle;
  },
  "["(drawingState, params) {
    drawingState.push();
  },
  "]"(drawingState, params) {
    drawingState.pop();
  }
};

function applyRule(rules, char) {
  return rules[char] || char;
}

function* fragmentGenerator(system, string) {
  for (const char of string) {
    yield applyRule(system.rules, char);
  }
}

function renderAGeneration(system, previousGeneration) {
  let nextGeneration = "";
  for (const character of previousGeneration) {
    const nextCharacters = applyRule(system.rules, character);
    nextGeneration += nextCharacters;
  }
  return nextGeneration;
}

const CANVAS_BOUNDS = new Point(960, 500);

function setup() {
  createCanvas(CANVAS_BOUNDS.x, CANVAS_BOUNDS.y);
  angleMode(DEGREES);
  noLoop();
}

system = fractalPlant;

function drawSystem(system, fragmentIterator, drawingState) {
  const drawFrame = () => {
    const iter = fragmentIterator.next();
    if (iter.done) {
      return;
    }
    const fragment = iter.value;
    for (const character of fragment) {
      const drawingFunction = commands[character];
      if (drawingFunction) {
        drawingFunction(drawingState, system.params);
      }
    }
    requestAnimationFrame(drawFrame);
  };
  requestAnimationFrame(drawFrame);
}

async function mouseClicked() {
  const origin = new Point(mouseX, mouseY);
  let systemState = system.axiom;
  console.log(systemState);
  for (let i = 1; i < system.steps - 1; i++) {
    systemState = renderAGeneration(system, systemState);
    console.log(systemState);
  }
  const drawingState = new DrawingState(origin, -90);
  const fragmentIterator = fragmentGenerator(system, systemState);
  drawSystem(system, fragmentIterator, drawingState);
}
