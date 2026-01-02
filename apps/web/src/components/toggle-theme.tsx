"use client";

import { themes } from "@/constants/themes";
import { useMountedState } from "@/hooks/use-mounted-state";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Spinner } from "./ui/spinner";

export function ToggleTheme() {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const mounted = useMountedState();

	if (!mounted) {
		return (
			<Button type="button" variant="outline" size="icon" disabled>
				<Spinner className="w-4 h-4" />
			</Button>
		);
	}

	const currentTheme = themes.find((t) => t.id === resolvedTheme);
	const IconTheme = currentTheme?.icon ?? SunMoon;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button type="button" variant="outline" size="icon">
					<IconTheme />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Temas</DropdownMenuLabel>
				<DropdownMenuRadioGroup
					defaultValue="system"
					value={theme}
					onValueChange={setTheme}
				>
					{themes.map((t) => {
						const Icon = t.icon;

						return (
							<DropdownMenuRadioItem key={t.id} value={t.id}>
								{t.name}
								<DropdownMenuShortcut>
									<Icon />
								</DropdownMenuShortcut>
							</DropdownMenuRadioItem>
						);
					})}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
