import { ArithmeticTypes } from './equations';

export const arithmeticExpressions: {
  [K in ArithmeticTypes]: (
    rangeVariable: number,
    variable: number
  ) => [number, string, number];
} = {
  multiplication: (variable: number, rangeVariable: number) => [
    variable,
    '×',
    rangeVariable,
  ],
  division: (variable: number, rangeVariable: number) => [
    variable,
    '÷',
    rangeVariable,
  ],
  addition: (variable: number, rangeVariable: number) => [
    variable,
    '+',
    rangeVariable,
  ],
  subtraction: (variable: number, rangeVariable: number) => [
    variable,
    '-',
    rangeVariable,
  ],
  exponentiation: (variable: number, rangeVariable: number) => [
    variable,
    '^',
    rangeVariable,
  ],
  nth_root: (variable: number, rangeVariable: number) => [
    rangeVariable,
    '√',
    variable,
  ],
};
