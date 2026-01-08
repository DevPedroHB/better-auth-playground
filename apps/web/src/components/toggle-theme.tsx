"use client";

import { themes } from "@/constants/themes";
import { cn } from "@/functions/utils";
import { useMountedState } from "@/hooks/use-mounted-state";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useMemo } from "react";
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
				<Spinner />
			</Button>
		);
	}

	const CurrentIcon = useMemo(() => {
		const currentTheme = themes.find((t) => t.id === resolvedTheme);

		return currentTheme?.icon ?? SunMoon;
	}, [resolvedTheme]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button type="button" variant="outline" size="icon">
					<CurrentIcon />
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
						const isActive = theme === t.id;

						return (
							<DropdownMenuRadioItem key={t.id} value={t.id}>
								{t.name}
								<DropdownMenuShortcut>
									<Icon className={cn(isActive && "text-primary")} />
								</DropdownMenuShortcut>
							</DropdownMenuRadioItem>
						);
					})}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
