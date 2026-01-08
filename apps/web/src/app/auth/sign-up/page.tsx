import { Card, CardContent } from "@/components/ui/card";
import { FieldDescription } from "@/components/ui/field";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { SignUpForm } from "./_components/sign-up-form";

export const metadata: Metadata = {
	title: "Inscrever-se",
	description:
		"Crie uma nova conta para começar a usar o Better Auth Playground.",
};

export default function SignUp() {
	return (
		<div className="flex flex-col gap-6">
			<Card className="p-0 overflow-hidden">
				<CardContent className="grid md:grid-cols-2 p-0">
					<div className="hidden md:block relative bg-muted">
						<Suspense
							fallback={<Skeleton className="absolute inset-0 size-full" />}
						>
							<Image
								src="/images/sign-up-banner.jpg"
								alt="Imagem aleatória"
								width={3584}
								height={5376}
								className="absolute inset-0 brightness-[0.5] size-full object-center object-cover"
							/>
						</Suspense>
					</div>
					<SignUpForm />
				</CardContent>
			</Card>
			<FieldDescription className="px-6 text-center">
				Ao clicar em continuar, você concorda com nossos{" "}
				<Link href="/legal/terms-of-service">Termos de Serviço</Link> e{" "}
				<Link href="/legal/privacy-policy">Política de Privacidade</Link>.
			</FieldDescription>
		</div>
	);
}
