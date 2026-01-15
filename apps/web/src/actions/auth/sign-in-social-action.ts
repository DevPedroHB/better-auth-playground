"use server";

import { auth } from "@/libs/auth";
import { actionClient } from "@/libs/safe-action";
import { signInSocialSchema } from "@/types/schemas/sign-in-social-schema";
import { headers } from "next/headers";

export const signInSocialAction = actionClient
  .metadata({ actionName: "signInSocialAction" })
  .inputSchema(signInSocialSchema)
  .action(async ({ parsedInput }) => {
    await auth.api.signInSocial({
      headers: await headers(),
      body: {
        provider: parsedInput,
      },
    });
  });
