import React from 'react';
import { SolutionNames } from './constants/solutionNames';
import { useArithmetic } from './contexts/ArithmeticContext';
import { useArithmeticControlsContext } from './contexts/ArithmeticControlsContext';
import { ExpressionDisplay } from './ExpressionDisplay';

export const ArithmeticDisplay = () => {
  const { variable, startingRange, endingRange } =
    useArithmeticControlsContext();
  const { state } = useArithmetic();
  const { solutionName, arithmeticExpression } = state;

  return (
    <section>
      <h3>{solutionName}s of the number</h3>
      <h2>{variable}</h2>
      {[...Array(endingRange + 1 - startingRange)].map((_n, i) => {
        const expression = arithmeticExpression(variable, i + startingRange);
        return (
          <ExpressionDisplay
            key={expression.join('')}
            expression={expression}
            solutionName={solutionName}
          />
        );
      })}
    </section>
  );
};
