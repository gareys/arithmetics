import { ArithmeticTypes } from './equations';

export const arithmeticExpressions: {
  [K in ArithmeticTypes]: (
    rangeVariable: number,
    variable: number
  ) => [number, string, number];
} = {
  multiplication: (rangeVariable: number, variable: number) => [
    rangeVariable,
    '×',
    variable,
  ],
  division: (rangeVariable: number, variable: number) => [
    rangeVariable,
    '÷',
    variable,
  ],
  addition: (rangeVariable: number, variable: number) => [
    rangeVariable,
    '+',
    variable,
  ],
  subtraction: (rangeVariable: number, variable: number) => [
    rangeVariable,
    '-',
    variable,
  ],
  exponentiation: (rangeVariable: number, variable: number) => [
    rangeVariable,
    '^',
    variable,
  ],
  nth_root: (rangeVariable: number, variable: number) => [
    variable,
    '√',
    rangeVariable,
  ],
};
