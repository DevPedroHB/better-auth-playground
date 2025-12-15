import { env } from "@better-auth-playground/env";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	casing: "snake_case",
	schema: "./src/schemas/**.ts",
	out: "./drizzle",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
