import React, { useEffect } from 'react';
import { ArithmeticControlInput } from './ArithmeticContolInput';
import { useArithmetic } from './contexts/ArithmeticContext';
import { useArithmeticControlsContext } from './contexts/ArithmeticControlsContext';
import { ArithmeticTypes, equationTuples } from './constants/equations';

export const ArithmeticControls = () => {
  const {
    arithmetic,
    setArithmetic,
    setVariable,
    variable,
    startingRange,
    setStartingRange,
    endingRange,
    setEndingRange,
  } = useArithmeticControlsContext();

  const { dispatch } = useArithmetic();

  useEffect(() => {
    dispatch({ type: arithmetic });
  }, [arithmetic]);
  return (
    <>
      <p>
        <label htmlFor="arithmetic">Arithmetic: </label>
        <select
          id="arithmetic"
          name="arithmetic"
          value={arithmetic}
          onChange={(e) => setArithmetic(e.target.value as ArithmeticTypes)}
        >
          {equationTuples.map(([arithmetic, _equation]) => {
            const displayValue = arithmetic.split('_').join(' ');
            return <option value={arithmetic}>{displayValue}</option>;
          })}
        </select>
      </p>
      <ArithmeticControlInput
        setter={setVariable}
        value={variable}
        id="variable"
      />
      <ArithmeticControlInput
        conditional={(x) => x <= endingRange}
        setter={setStartingRange}
        value={startingRange}
        id="starting_range"
      />
      <ArithmeticControlInput
        conditional={(x) => x >= startingRange}
        setter={setEndingRange}
        value={endingRange}
        id="ending_range"
      />
    </>
  );
};
