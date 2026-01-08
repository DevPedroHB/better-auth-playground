import { auth } from "@/libs/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface IAuthLayout {
	children: ReactNode;
}

export default async function AuthLayout({ children }: Readonly<IAuthLayout>) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) {
		redirect("/");
	}

	return (
		<main className="flex flex-col justify-center items-center p-6 md:p-10 min-h-svh">
			<div className="w-full max-w-sm md:max-w-4xl">{children}</div>
		</main>
	);
}
