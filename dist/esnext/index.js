import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
export const Greeter = (name) => `Hello ${name}`;
const StyledButton = styled.button `
  padding: 5px 10px;
  background: ${({ theme }) => theme?.primaryColor || 'black'};
  color: white;
`;
export const Button = ({ title, onClick }) => {
    const [counter, setCounter] = useState(1);
    return (_jsxs(StyledButton, { onClick: (event) => {
            setCounter((prev) => prev + 1);
            onClick(event);
        }, children: [title, " ", counter] }, void 0));
};
export default {
    Greeter,
    Button,
};
