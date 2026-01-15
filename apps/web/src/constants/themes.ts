import { Monitor, Moon, Sun } from "lucide-react";

export const themes = [
  {
    id: "light",
    name: "Claro",
    icon: Sun,
  },
  {
    id: "dark",
    name: "Escuro",
    icon: Moon,
  },
  {
    id: "system",
    name: "Sistema",
    icon: Monitor,
  },
] as const;
