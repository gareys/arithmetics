import React, { createContext, useContext, useReducer } from 'react';
import { INITIAL_ARITHMETIC } from '../constants/initalValues';
import { ArithmeticTypes, equations } from '../constants/equations';
import { solutionNames } from '../constants/solutionNames';
import { arithmeticExpressions } from '../constants/arithmeticExpressions';

const ArithmeticContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

type Action = { type: ArithmeticTypes };

type Dispatch = (action: Action) => void;
type State = {
  equation: (a: number, b: number) => number;
  solutionName: string;
  arithmeticExpression: (
    rangeVariable: number,
    variable: number
  ) => [number, string, number];
};
type ArithmeticProviderProps = { children: React.ReactNode };

const arithmeticReducer = (_state: State, action: Action) => {
  return {
    equation: equations[action.type],
    solutionName: solutionNames[action.type],
    arithmeticExpression: arithmeticExpressions[action.type],
  };
};

export const ArithmeticProvider = ({ children }: ArithmeticProviderProps) => {
  const [state, dispatch] = useReducer(arithmeticReducer, {
    equation: equations[INITIAL_ARITHMETIC],
    solutionName: solutionNames[INITIAL_ARITHMETIC],
    arithmeticExpression: arithmeticExpressions[INITIAL_ARITHMETIC],
  });

  const value = { state, dispatch };
  return (
    <ArithmeticContext.Provider value={value}>
      {children}
    </ArithmeticContext.Provider>
  );
};

export const useArithmetic = () => {
  const context = useContext(ArithmeticContext);
  if (context === undefined) {
    throw new Error('useArithmetic must be used within a ArithmeticProvider');
  }
  return context;
};
