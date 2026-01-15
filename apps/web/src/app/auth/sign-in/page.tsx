import { Card, CardContent } from "@/components/ui/card";
import { FieldDescription } from "@/components/ui/field";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SignInForm } from "./_components/sign-in-form";

export const metadata: Metadata = {
  title: "Entrar",
  description:
    "Entre com sua conta para começar a usar o Better Auth Playground.",
};

export default function SignIn() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="p-0 overflow-hidden">
        <CardContent className="grid md:grid-cols-2 p-0">
          <SignInForm />
          <div className="hidden md:block relative bg-muted">
            <Image
              src="/images/sign-in-banner.jpg"
              alt="Árvore digital abstrata com uma cobertura de rede de dados azul e rosa brilhante, emitindo feixes de luz e refletindo na água escura, simbolizando computação em nuvem, IA e conectividade."
              width={3584}
              height={5376}
              className="absolute inset-0 brightness-[0.5] size-full object-center object-cover"
            />
          </div>
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
