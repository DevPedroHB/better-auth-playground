import { ReactNode } from "react";

interface IAuthLayout {
	children: ReactNode;
}

export default function AuthLayout({ children }: Readonly<IAuthLayout>) {
	return (
		<main className="flex flex-col justify-center items-center p-6 md:p-10 min-h-svh">
			<div className="w-full max-w-sm md:max-w-4xl">{children}</div>
		</main>
	);
}
