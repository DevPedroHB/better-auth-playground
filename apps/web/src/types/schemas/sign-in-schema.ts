import z from "zod";
import { passwordRegex } from "./sign-up-schema";

export const signInSchema = z.object({
	email: z.email("Endereço de e-mail inválido"),
	password: z
		.string()
		.trim()
		.min(
			8,
			"Muito pequeno: esperava-se que a string tivesse pelo menos 8 caracteres.",
		)
		.max(
			128,
			"Muito grande: esperava-se que a string tivesse no máximo 128 caracteres.",
		)
		.regex(
			passwordRegex,
			"A senha deve conter letra maiúscula, minúscula, número e caractere especial",
		),
	rememberMe: z.boolean(),
});

export type SignInSchema = z.infer<typeof signInSchema>;
