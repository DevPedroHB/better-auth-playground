import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
		BETTER_AUTH_SECRET: z.string().min(1),
		BETTER_AUTH_URL: z.url(),
	},
	clientPrefix: "NEXT_PUBLIC_",
	client: {},
	shared: {},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
