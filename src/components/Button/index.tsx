import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
	return <button {...rest}>{children}</button>;
};