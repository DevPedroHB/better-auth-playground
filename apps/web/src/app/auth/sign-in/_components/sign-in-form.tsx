"use client";

import { signInAction } from "@/actions/auth/sign-in-action";
import { ButtonLoading } from "@/components/button-loading";
import { InputPassword } from "@/components/input-password";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
	FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionErrorHandler } from "@/hooks/use-action-error-handler";
import { signInSchema } from "@/types/schemas/sign-in-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import Link from "next/link";
import { Controller } from "react-hook-form";
import { toast } from "sonner";
import { SignInSocialButtons } from "../../_components/sign-in-social-buttons";

export function SignInForm() {
	const {
		form,
		handleSubmitWithAction,
		resetFormAndAction,
		action: { isPending },
	} = useHookFormAction(signInAction, zodResolver(signInSchema), {
		actionProps: {
			onError({ error }) {
				useActionErrorHandler(error);
			},
			onNavigation() {
				toast.success("Login efetuado com sucesso!");

				resetFormAndAction();
			},
		},
		formProps: {
			defaultValues: {
				email: "",
				password: "",
				rememberMe: false,
			},
			mode: "all",
		},
	});

	return (
		<form
			id="sign-in-form"
			onSubmit={handleSubmitWithAction}
			className="p-6 md:p-8"
		>
			<FieldGroup>
				<FieldSet>
					<div className="flex flex-col items-center gap-2 text-center">
						<h1 className="font-bold text-2xl">Bem vindo de volta</h1>
						<FieldDescription>
							Faça login em sua conta Better Auth Playground
						</FieldDescription>
					</div>
					<Controller
						name="email"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={`sign-in-form-${field.name}`}>
									E-mail
								</FieldLabel>
								<Input
									id={`sign-in-form-${field.name}`}
									aria-invalid={fieldState.invalid}
									type="email"
									placeholder="email@exemplo.com"
									required
									{...field}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						name="password"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel
									htmlFor={`sign-in-form-${field.name}`}
									className="justify-between"
								>
									Senha
									<Link
										href="/auth/forgot-password"
										className="hover:text-primary"
									>
										Esqueceu sua senha?
									</Link>
								</FieldLabel>
								<InputPassword
									id={`sign-in-form-${field.name}`}
									aria-invalid={fieldState.invalid}
									placeholder="********"
									minLength={8}
									maxLength={128}
									required
									{...field}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						name="rememberMe"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field orientation="horizontal" data-invalid={fieldState.invalid}>
								<Checkbox
									id={`sign-in-form-${field.name}`}
									aria-invalid={fieldState.invalid}
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
								<FieldLabel
									htmlFor={`sign-in-form-${field.name}`}
									className="font-normal"
								>
									Lembre de mim
								</FieldLabel>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<ButtonLoading
						type="submit"
						form="sign-in-form"
						isLoading={isPending}
					>
						Entrar
					</ButtonLoading>
					<FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
						Ou continue com
					</FieldSeparator>
					<SignInSocialButtons />
					<FieldDescription className="text-center">
						Não tem uma conta? <Link href="/auth/sign-up">Inscrever-se</Link>
					</FieldDescription>
				</FieldSet>
			</FieldGroup>
		</form>
	);
}
