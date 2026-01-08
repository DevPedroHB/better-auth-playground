"use server";

import { auth } from "@/libs/auth";
import { actionClient } from "@/libs/safe-action";
import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";

export const signOutAction = actionClient
	.metadata({ actionName: "signOutAction" })
	.action(async () => {
		await auth.api.signOut({
			headers: await headers(),
		});

		permanentRedirect("/auth/sign-in");
	});
