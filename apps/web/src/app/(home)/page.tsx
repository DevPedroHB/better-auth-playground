import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { auth } from "@/libs/auth";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { SignOutDialog } from "../auth/_components/sign-out-dialog";

export const metadata: Metadata = {
  title: "Início",
};

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <main className="flex flex-col justify-center items-center gap-4 p-4 min-h-svh">
      <ToggleTheme />
      {session && (
        <pre className="bg-card shadow-sm p-4 border rounded-xl max-w-xl overflow-auto text-card-foreground">
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
      )}
      {session ? (
        <SignOutDialog asChild>
          <Button type="button" variant="destructive">
            Sair
          </Button>
        </SignOutDialog>
      ) : (
        <Button type="button" asChild>
          <Link href="/auth/sign-in">Entrar</Link>
        </Button>
      )}
    </main>
  );
}
