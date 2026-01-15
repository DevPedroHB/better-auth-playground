"use client";

import { signUpAction } from "@/actions/auth/sign-up-action";
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
import { onActionErrorHandler } from "@/functions/on-action-error-handler";
import { signUpSchema } from "@/types/schemas/sign-up-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import Link from "next/link";
import { Controller } from "react-hook-form";
import { toast } from "sonner";
import { SignInSocialButtons } from "../../_components/sign-in-social-buttons";

export function SignUpForm() {
  const {
    form,
    handleSubmitWithAction,
    resetFormAndAction,
    action: { isPending },
  } = useHookFormAction(signUpAction, zodResolver(signUpSchema), {
    actionProps: {
      onError({ error }) {
        onActionErrorHandler(error);
      },
      onNavigation() {
        toast.success("Conta criada com sucesso!");

        resetFormAndAction();
      },
    },
    formProps: {
      defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
      },
      mode: "all",
    },
  });

  return (
    <form
      id="sign-up-form"
      onSubmit={handleSubmitWithAction}
      className="p-6 md:p-8"
    >
      <FieldGroup>
        <FieldSet>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="font-bold text-2xl">Crie sua conta</h1>
            <FieldDescription>
              Preencha as informações abaixo para criar sua conta
            </FieldDescription>
          </div>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`sign-up-form-${field.name}`}>
                  Nome completo
                </FieldLabel>
                <Input
                  id={`sign-up-form-${field.name}`}
                  aria-invalid={fieldState.invalid}
                  type="text"
                  placeholder="Fulano de Tal"
                  minLength={3}
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
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`sign-up-form-${field.name}`}>
                  E-mail
                </FieldLabel>
                <Input
                  id={`sign-up-form-${field.name}`}
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
          <Field className="gap-4 grid grid-cols-2">
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`sign-up-form-${field.name}`}>
                    Senha
                  </FieldLabel>
                  <InputPassword
                    id={`sign-up-form-${field.name}`}
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
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={`sign-up-form-${field.name}`}>
                    Confirme sua senha
                  </FieldLabel>
                  <InputPassword
                    id={`sign-up-form-${field.name}`}
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
          </Field>
          <Controller
            name="rememberMe"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                <Checkbox
                  id={`sign-up-form-${field.name}`}
                  aria-invalid={fieldState.invalid}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <FieldLabel
                  htmlFor={`sign-up-form-${field.name}`}
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
            form="sign-up-form"
            isLoading={isPending}
          >
            Inscrever-se
          </ButtonLoading>
          <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
            Ou continue com
          </FieldSeparator>
          <SignInSocialButtons />
          <FieldDescription className="text-center">
            Já tem uma conta? <Link href="/auth/sign-in">Entrar</Link>
          </FieldDescription>
        </FieldSet>
      </FieldGroup>
    </form>
  );
}
