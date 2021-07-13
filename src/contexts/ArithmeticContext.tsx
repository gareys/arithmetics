import React, { createContext, useContext, useReducer } from 'react';
import { INITIAL_ARITHMETIC } from '../constants/initalValues';
import {
  ArithmeticTypes,
  equations,
  EquationType,
} from '../constants/equations';
import { SolutionNames, solutionNames } from '../constants/solutionNames';
import {
  arithmeticExpressions,
  ArithmeticExpressionType,
} from '../constants/arithmeticExpressions';

const ArithmeticContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

type Action = { type: ArithmeticTypes };

type Dispatch = (action: Action) => void;
type State = {
  solutionName: SolutionNames;
  arithmeticExpression: ArithmeticExpressionType;
};
type ArithmeticProviderProps = { children: React.ReactNode };

const arithmeticReducer = (_state: State, action: Action) => {
  return {
    solutionName: solutionNames[action.type],
    arithmeticExpression: arithmeticExpressions[action.type],
  };
};

export const ArithmeticProvider = ({ children }: ArithmeticProviderProps) => {
  const [state, dispatch] = useReducer(arithmeticReducer, {
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
