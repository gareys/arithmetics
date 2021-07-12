import React from 'react';
import { useArithmetic } from './contexts/ArithmeticContext';
import { useArithmeticControlsContext } from './contexts/ArithmeticControlsContext';

export const ArithmeticDisplay = () => {
  const { variable, startingRange, endingRange } =
    useArithmeticControlsContext();
  const { state } = useArithmetic();
  const { equation, solutionName, arithmeticExpression } = state;

  return (
    <section>
      <h3>{solutionName}s of the number</h3>
      <h2>{variable}</h2>
      {[...Array(endingRange + 1 - startingRange)].map((_n, i) => {
        const solution = equation(i + startingRange, variable);
        return (
          <p key={solution + Math.random()}>
            <em>
              {arithmeticExpression(i + startingRange, variable).join(' ')}
            </em>{' '}
            = <strong>{solution}</strong>
          </p>
        );
      })}
    </section>
  );
};
