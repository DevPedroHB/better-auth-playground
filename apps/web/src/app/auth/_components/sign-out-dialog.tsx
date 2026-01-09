"use client";

import { signOutAction } from "@/actions/auth/sign-out-action";
import { ButtonLoading } from "@/components/button-loading";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useActionErrorHandler } from "@/hooks/use-action-error-handler";
import { useAction } from "next-safe-action/hooks";
import { ComponentProps } from "react";
import { toast } from "sonner";

export function SignOutDialog(
	props: ComponentProps<typeof AlertDialogTrigger>,
) {
	const { executeAsync, isPending, reset } = useAction(signOutAction, {
		onError({ error }) {
			useActionErrorHandler(error);
		},
		onNavigation() {
			toast.success("Sessão encerrada com sucesso!");

			reset();
		},
	});

	return (
		<AlertDialog>
			<AlertDialogTrigger {...props} />
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Você tem certeza que deseja sair?</AlertDialogTitle>
					<AlertDialogDescription>
						Ao sair sua sessão será encerrada e você precisará informar suas
						credenciais novamente para acessar a conta. Certifique-se de ter
						salvo qualquer alteração antes de continuar.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel type="button" disabled={isPending}>
						Cancelar
					</AlertDialogCancel>
					<AlertDialogAction asChild>
						<ButtonLoading
							type="button"
							isLoading={isPending}
							onClick={() => executeAsync()}
						>
							Sair da conta
						</ButtonLoading>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
