"use client";

import { themes } from "@/constants/themes";
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

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunMoon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Temas</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          defaultValue="system"
          value={theme}
          onValueChange={setTheme}
        >
          {themes.map((theme) => {
            const Icon = theme.icon;

            return (
              <DropdownMenuRadioItem key={theme.id} value={theme.id}>
                {theme.name}
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
