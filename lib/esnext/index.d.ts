import { FC } from 'react';
export declare const Greeter: (name: string) => string;
declare type ButtonProps = {
    title: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export declare const Button: FC<ButtonProps>;
export {};
