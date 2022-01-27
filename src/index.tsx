import * as React from 'react';

export const Greeter = (name: string) => `Hello ${name}`;

type ButtonProps = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  const [counter, setCounter] = React.useState(1);

  return (
    <button
      onClick={(event) => {
        setCounter((prev) => prev + 1);
        onClick(event);
      }}
    >
      {title} {counter}
    </button>
  );
};
