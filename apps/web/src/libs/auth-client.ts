import { env } from "@better-auth-playground/env";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: env.nextjs.BETTER_AUTH_URL,
});
