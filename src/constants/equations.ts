export const equationTuples = [
  [
    'multiplication',
    (multiplicand: number, multiplier: number) => multiplicand * multiplier,
  ],
  ['division', (dividend: number, divisor: number) => dividend / divisor],
  ['addition', (addendA: number, addendB: number) => addendA + addendB],
  [
    'subtraction',
    (minuend: number, subtrahend: number) => minuend - subtrahend,
  ],
  [
    'exponentiation',
    (base: number, exponent: number) => Math.pow(base, exponent),
  ],
  ['nth_root', (base: number, root: number) => Math.pow(base, 1 / root)],
] as const;

export type ArithmeticTypes = typeof equationTuples[number][0];

type EquationObject = {
  [K in ArithmeticTypes]: (rangeVariable: number, variable: number) => number;
};

export const equations = equationTuples.reduce((acc, [arithmetic, eq]) => {
  return { ...acc, [arithmetic]: eq };
}, {} as EquationObject);
