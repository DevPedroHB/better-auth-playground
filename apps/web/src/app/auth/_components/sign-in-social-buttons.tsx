"use client";

import { signInSocialAction } from "@/actions/auth/sign-in-social-action";
import { ButtonLoading } from "@/components/button-loading";
import { Field } from "@/components/ui/field";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { signInSocials } from "@/constants/sign-in-socials";
import { cn } from "@/functions/utils";
import { useActionErrorHandler } from "@/hooks/use-action-error-handler";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

export function SignInSocialButtons() {
	const { executeAsync, isPending, reset } = useAction(signInSocialAction, {
		onError({ error }) {
			useActionErrorHandler(error);
		},
		onNavigation() {
			toast.success("Login efetuado com sucesso!");

			reset();
		},
	});

	return (
		<Field className="gap-4 grid grid-cols-3">
			{signInSocials.map((social) => {
				const Icon = social.icon;

				return (
					<Tooltip key={social.id}>
						<TooltipTrigger asChild>
							<ButtonLoading
								type="button"
								variant="outline"
								isLoading={isPending}
								onClick={() => executeAsync(social.id)}
							>
								<Icon className={cn(social.invertColor && "not-dark:invert")} />
							</ButtonLoading>
						</TooltipTrigger>
						<TooltipContent>{social.name}</TooltipContent>
					</Tooltip>
				);
			})}
		</Field>
	);
}
