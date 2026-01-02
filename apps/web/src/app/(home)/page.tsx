import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Início",
};

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center gap-2 min-h-svh">
			<h1>Home</h1>
			<Button type="button" variant="link" asChild>
				<Link href="/not-found">Ir para página 404</Link>
			</Button>
			<ToggleTheme />
		</main>
	);
}
