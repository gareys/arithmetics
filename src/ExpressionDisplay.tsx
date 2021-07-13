import React from 'react';
import { ArithmeticExpressionReturnType } from './constants/arithmeticExpressions';
import { SolutionNames } from './constants/solutionNames';

export const ExpressionDisplay = ({
  expression,
  solutionName,
}: {
  expression: ArithmeticExpressionReturnType;
  solutionName: SolutionNames;
}) => {
  const leftHandSide = expression.slice(0, 3).join(' ');
  const rightHandSide = expression.slice(-1).pop();

  if (solutionName === 'root') {
    return (
      <p>
        <em>
          <sup>{expression.slice(0, 1).pop()}</sup>
          {expression.slice(1, 3).join('')}
        </em>{' '}
        = <strong>{rightHandSide}</strong>
      </p>
    );
  }

  if (solutionName === 'power') {
    return (
      <p>
        <em>
          {expression.slice(0, 1).pop()}
          <sup>{expression.slice(2, 3).pop()}</sup>
        </em>{' '}
        = <strong>{rightHandSide}</strong>
      </p>
    );
  }

  return (
    <p>
      <em>{leftHandSide}</em> = <strong>{rightHandSide}</strong>
    </p>
  );
};
