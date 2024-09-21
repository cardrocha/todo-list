import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './styles.module.scss';

type ButtonProps = {
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	);
};
