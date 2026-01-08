import { ComponentProps } from "react";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

interface IButtonLoading extends ComponentProps<typeof Button> {
	isLoading?: boolean;
}

export function ButtonLoading({
	isLoading = false,
	disabled,
	children,
	...props
}: IButtonLoading) {
	return (
		<Button disabled={disabled || isLoading} {...props}>
			{isLoading && <Spinner />}
			{children}
		</Button>
	);
}
