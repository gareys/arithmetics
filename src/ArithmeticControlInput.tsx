import React from 'react';

export const ArithmeticControlInput = ({
  conditional = () => true,
  setter,
  value,
  id,
}: {
  conditional?: (x: number) => boolean;
  setter: (value: React.SetStateAction<number>) => void;
  value: number;
  id: string;
}) => {
  const label = id
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return (
    <p>
      <label htmlFor={id}>{label}: </label>
      <input
        id={id}
        name={id}
        type="number"
        pattern="\d*"
        value={value}
        onChange={(e) => {
          if (
            (e.target.valueAsNumber || e.target.valueAsNumber === 0) &&
            conditional(e.target.valueAsNumber)
          )
            setter(e.target.valueAsNumber);
        }}
      />
    </p>
  );
};
