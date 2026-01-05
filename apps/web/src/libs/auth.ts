import { db } from "@better-auth-playground/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { env } from "./env";

export const auth = betterAuth({
	appName: "Better Auth Playground",
	baseURL: env.BETTER_AUTH_URL,
	basePath: "/api/auth",
	trustedOrigins: [env.BETTER_AUTH_URL],
	secret: env.BETTER_AUTH_SECRET,
	database: drizzleAdapter(db, {
		provider: "pg",
		usePlural: true,
	}),
	emailAndPassword: {
		enabled: true,
		revokeSessionsOnPasswordReset: true,
	},
	socialProviders: {},
	plugins: [nextCookies()],
	session: {
		cookieCache: {
			enabled: true,
			refreshCache: true,
		},
		preserveSessionInDatabase: true,
		storeSessionInDatabase: true,
	},
	account: {
		accountLinking: {
			enabled: true,
			allowUnlinkingAll: true,
			updateUserInfoOnLink: true,
		},
		encryptOAuthTokens: true,
		storeStateStrategy: "database",
	},
	advanced: {
		defaultCookieAttributes: {
			httpOnly: true,
			secure: true,
		},
		useSecureCookies: true,
	},
});
