import z from "zod";

export const passwordRegex =
	/(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?])\S*$/;

export const signUpSchema = z
	.object({
		name: z
			.string()
			.min(
				3,
				"Muito pequeno: esperava-se que a string tivesse pelo menos 3 caracteres.",
			)
			.trim()
			.refine(
				(value) => value.split(" ").length >= 2,
				"Informe seu nome completo",
			),
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
		confirmPassword: z
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
				"A confirmação da senha deve conter letra maiúscula, minúscula, número e caractere especial",
			),
		rememberMe: z.boolean(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		error: "As senhas não coincidem",
		path: ["confirmPassword"],
	});

export type SignUpSchema = z.infer<typeof signUpSchema>;
