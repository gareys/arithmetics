import React, { createContext, useContext, useState } from 'react';
import {
  INITIAL_ARITHMETIC,
  INITIAL_RANGE_BEGINNING,
  INITIAL_RANGE_ENDING,
  INITIAL_VARIABLE,
} from '../constants/initialValues';
import { ArithmeticTypes } from '../constants/equations';

type ContextProps =
  | {
      arithmetic: ArithmeticTypes;
      setArithmetic: (value: React.SetStateAction<ArithmeticTypes>) => void;
      variable: number;
      setVariable: (value: React.SetStateAction<number>) => void;
      startingRange: number;
      setStartingRange: (value: React.SetStateAction<number>) => void;
      endingRange: number;
      setEndingRange: (value: React.SetStateAction<number>) => void;
    }
  | undefined;

const ArithmeticControlsContext = createContext<ContextProps>(undefined);

type ArithmeticControlsProviderProps = { children: React.ReactNode };
export const ArithmeticControlsProvider = ({
  children,
}: ArithmeticControlsProviderProps) => {
  const [arithmetic, setArithmetic] =
    useState<ArithmeticTypes>(INITIAL_ARITHMETIC);
  const [variable, setVariable] = useState(INITIAL_VARIABLE);
  const [startingRange, setStartingRange] = useState(INITIAL_RANGE_BEGINNING);
  const [endingRange, setEndingRange] = useState(INITIAL_RANGE_ENDING);

  const value = {
    arithmetic,
    setArithmetic,
    variable,
    setVariable,
    startingRange,
    setStartingRange,
    endingRange,
    setEndingRange,
  };

  return (
    <ArithmeticControlsContext.Provider value={value}>
      {children}
    </ArithmeticControlsContext.Provider>
  );
};

export const useArithmeticControlsContext = () => {
  const context = useContext(ArithmeticControlsContext);
  if (context === undefined) {
    throw new Error(
      'useArithmeticControlsContext must be used within a ArithmeticControlsProvider'
    );
  }
  return context;
};
