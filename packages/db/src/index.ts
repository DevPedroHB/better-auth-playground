import { env } from "@better-auth-playground/env";
import { drizzle } from "drizzle-orm/postgres-js";
import { createSchemaFactory } from "drizzle-zod";
import postgres from "postgres";
import { schema } from "./schemas";

export const sql = postgres(env.DATABASE_URL);

export const db = drizzle({
	client: sql,
	casing: "snake_case",
	schema,
});

export const { createInsertSchema, createSelectSchema, createUpdateSchema } =
	createSchemaFactory({
		coerce: true,
	});
