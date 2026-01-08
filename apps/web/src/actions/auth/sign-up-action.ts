"use server";

import { auth } from "@/libs/auth";
import { actionClient } from "@/libs/safe-action";
import { signUpSchema } from "@/types/schemas/sign-up-schema";
import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";

export const signUpAction = actionClient
	.metadata({ actionName: "signUpAction" })
	.inputSchema(signUpSchema)
	.action(async ({ parsedInput: { confirmPassword, ...data } }) => {
		await auth.api.signUpEmail({
			headers: await headers(),
			body: {
				...data,
				callbackURL: "/",
			},
		});

		permanentRedirect("/");
	});
