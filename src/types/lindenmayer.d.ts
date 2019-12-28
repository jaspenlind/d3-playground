export = lindenmayer;

declare class lindenmayer {
  constructor(...args: any[]);

  applyProductions(...args: any[]): void;

  clearProductions(...args: any[]): void;

  final(...args: any[]): void;

  getProductionResult(...args: any[]): void;

  getRaw(...args: any[]): void;

  getString(...args: any[]): void;

  iterate(...args: any[]): void;

  match(...args: any[]): void;

  setAxiom(...args: any[]): void;

  setFinal(...args: any[]): void;

  setFinals(...args: any[]): void;

  setProduction(...args: any[]): void;

  setProductions(...args: any[]): void;

  static getStringResult: any;

  static testClassicParametricSyntax(axiom: any): any;

  static transformClassicCSProduction(p: any): any;

  static transformClassicParametricAxiom(axiom: any): void;

  static transformClassicStochasticProductions(productions: any): any;
}
