import { ArithmeticTypes, equations } from './equations';

export type ArithmeticExpressionType = (
  rangeVariable: number,
  variable: number
) => [string, string, string, string];

export type ArithmeticExpressionReturnType =
  ReturnType<ArithmeticExpressionType>;

export const arithmeticExpressions: {
  [K in ArithmeticTypes]: ArithmeticExpressionType;
} = {
  multiplication: (variable: number, rangeVariable: number) => [
    String(variable),
    '×',
    String(rangeVariable),
    String(equations.multiplication(variable, rangeVariable)),
  ],
  division: (variable: number, rangeVariable: number) => [
    String(variable),
    '÷',
    String(rangeVariable),
    String(equations.division(variable, rangeVariable)),
  ],
  addition: (variable: number, rangeVariable: number) => [
    String(variable),
    '+',
    String(rangeVariable),
    String(equations.addition(variable, rangeVariable)),
  ],
  subtraction: (variable: number, rangeVariable: number) => [
    String(variable),
    '-',
    String(rangeVariable),
    String(equations.subtraction(variable, rangeVariable)),
  ],
  exponentiation: (variable: number, rangeVariable: number) => [
    String(variable),
    '^',
    String(rangeVariable),
    String(equations.exponentiation(variable, rangeVariable)),
  ],
  nth_root: (variable: number, rangeVariable: number) => [
    String(rangeVariable),
    '√',
    String(variable),
    String(equations.nth_root(variable, rangeVariable)),
  ],
};
