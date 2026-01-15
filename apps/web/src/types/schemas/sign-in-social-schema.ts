import { signInSocials } from "@/constants/sign-in-socials";
import z from "zod";

const socialIds = signInSocials.map((s) => s.id) as [
  (typeof signInSocials)[number]["id"],
  ...(typeof signInSocials)[number]["id"][],
];

export const signInSocialSchema = z.enum(socialIds);

export type SignInSocialSchema = z.infer<typeof signInSocialSchema>;
