import { ToggleTheme } from "@/components/toggle-theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Início",
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-2 min-h-svh">
      <h1>Home</h1>
      <ToggleTheme />
    </main>
  );
}
