"use client";

import { Eye, EyeOff } from "lucide-react";
import { ComponentProps } from "react";
import { useToggle } from "react-use";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "./ui/input-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function InputPassword(props: ComponentProps<typeof InputGroupInput>) {
	const [isVisible, toggleVisibility] = useToggle(false);

	const type = isVisible ? "text" : "password";
	const Icon = isVisible ? EyeOff : Eye;
	const tooltipText = isVisible ? "Ocultar senha" : "Mostrar senha";

	return (
		<InputGroup>
			<InputGroupInput type={type} autoComplete="current-password" {...props} />
			<InputGroupAddon align="inline-end">
				<Tooltip>
					<TooltipTrigger asChild>
						<InputGroupButton
							type="button"
							variant="ghost"
							size="icon-xs"
							onClick={toggleVisibility}
						>
							<Icon />
						</InputGroupButton>
					</TooltipTrigger>
					<TooltipContent>{tooltipText}</TooltipContent>
				</Tooltip>
			</InputGroupAddon>
		</InputGroup>
	);
}
