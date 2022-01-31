import { FC, useState } from 'react';
import styled from 'styled-components';

export const Greeter = (name: string) => `Hello ${name}`;

type ButtonProps = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const StyledButton = styled.button`
  padding: 5px 10px;
  background: ${({ theme }) => theme?.primaryColor || 'black'};
  color: white;
`;

export const Button: FC<ButtonProps> = ({ title, onClick }) => {
  const [counter, setCounter] = useState(1);

  return (
    <StyledButton
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCounter((prev) => prev + 1);
        onClick(event);
      }}
    >
      {title} {counter}
    </StyledButton>
  );
};
