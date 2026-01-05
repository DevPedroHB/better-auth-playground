import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { env } from "./src/env";

export default defineConfig({
	dialect: "postgresql",
	casing: "snake_case",
	schema: "./src/schemas/**.ts",
	out: "./drizzle",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
