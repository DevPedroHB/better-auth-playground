import { BackNavigationButton } from "@/components/back-navigation-button";
import { Button } from "@/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/components/ui/empty";
import { ArrowLeft, Frown, Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Página não encontrada",
	description: "A página que você está procurando não foi encontrada.",
};

export default function NotFound() {
	return (
		<main className="flex justify-center items-center min-h-svh">
			<Empty>
				<EmptyHeader>
					<EmptyMedia variant="icon">
						<Frown />
					</EmptyMedia>
					<EmptyTitle>Ops… página não encontrada</EmptyTitle>
					<EmptyDescription>
						A página que você procura não existe. Vamos te levar de volta para
						um lugar seguro.
					</EmptyDescription>
				</EmptyHeader>
				<EmptyContent className="flex-row justify-center gap-2">
					<BackNavigationButton>
						<ArrowLeft />
						Página anterior
					</BackNavigationButton>
					<Button type="button" variant="outline" asChild>
						<Link href="/">
							<Home />
							Página inicial
						</Link>
					</Button>
				</EmptyContent>
			</Empty>
		</main>
	);
}
