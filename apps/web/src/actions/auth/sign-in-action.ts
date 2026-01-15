"use server";

import { auth } from "@/libs/auth";
import { actionClient } from "@/libs/safe-action";
import { signInSchema } from "@/types/schemas/sign-in-schema";
import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";

export const signInAction = actionClient
  .metadata({ actionName: "signInAction" })
  .inputSchema(signInSchema)
  .action(async ({ parsedInput }) => {
    await auth.api.signInEmail({
      headers: await headers(),
      body: {
        ...parsedInput,
      },
    });

    permanentRedirect("/");
  });
