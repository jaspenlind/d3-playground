declare module "lindenmayer" {
  export type ObjectLiteralOf<TKey, TValue> = { [key: TKey]: TValue } | ArrayLike<TValue>;
  export type Final = (info: FinalInfo, ...args: any[]) => void;
  export interface FinalInfo {
    index: number;
    part: string;
  }

  export interface LSystemOptions {
    axiom: string;
    productions: ObjectLiteralOf<string, string>;
    finals: ObjectLiteralOf<string, Final>;
    branchSymbols: string;
    ignoredSymbols: string;
    allowClassicSyntax: boolean;
    classicParametricSyntax: boolean;
    forceObjects: boolean;
    debug: boolean;
  }

  export interface Successor {
    weight?: number;
  }

  export interface Production {
    from: string;
    to: string;
  }
  export interface MatchOptions {
    direction: MatchDirection;
    match: string;
    index: number;
    branchSymbols: string[];
    ignoreSymbols: string[];
  }

  export interface Match {
    result: boolean;
    matchIndices: number[];
  }

  export type MatchDirection = "right" | "left";

  export class LSystem {
    constructor(options: Partial<LSystemOptions>);
    iterations: number;
    applyProductions(): void;

    clearProductions(): void;

    final(...args: any[]): void;

    getProductionResult(...args: any[]): void;

    getRaw(...args: any[]): void;

    getString(...args: any[]): void;

    iterate(iterations?: number): void;

    match(options: Partial<MatchOptions>): Match;

    setAxiom(axiom: string): void;

    setFinal(final: Final): void;

    setFinals(...finals: Final[]): void;

    setProduction(...args: any[]): void;

    setProductions(...args: any[]): void;

    static getStringResult: any;

    static testClassicParametricSyntax(axiom: any): any;

    static transformClassicCSProduction(p: any): any;

    static transformClassicParametricAxiom(axiom: any): void;

    static transformClassicStochasticProductions(productions: any): any;
  }

  export default LSystem;
}
