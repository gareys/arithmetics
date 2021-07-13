import { ArithmeticTypes } from './equations';

export type SolutionNames =
  | 'product'
  | 'quotient'
  | 'sum'
  | 'difference'
  | 'power'
  | 'root';

export const solutionNames: Record<ArithmeticTypes, SolutionNames> = {
  multiplication: 'product',
  division: 'quotient',
  addition: 'sum',
  subtraction: 'difference',
  exponentiation: 'power',
  nth_root: 'root',
};
