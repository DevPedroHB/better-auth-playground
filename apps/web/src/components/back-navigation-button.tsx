"use client";

import { useRouter } from "next/navigation";
import { ComponentProps, MouseEvent } from "react";
import { Button } from "./ui/button";

interface IBackNavigationButton extends ComponentProps<typeof Button> {
	fallbackPath?: string;
}

export function BackNavigationButton({
	fallbackPath = "/",
	onClick,
	...props
}: IBackNavigationButton) {
	const router = useRouter();

	function handleClick(event: MouseEvent<HTMLButtonElement>) {
		if (onClick) {
			onClick(event);
		}

		const hasNavigationHistory = window.history.length > 1;

		if (hasNavigationHistory) {
			router.back();
		} else {
			router.push(fallbackPath);
		}
	}

	return <Button type="button" onClick={handleClick} {...props} />;
}
