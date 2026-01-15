import { DiscordSvg } from "@/components/svgs/discord-svg";
import { GitHubSvg } from "@/components/svgs/github-svg";
import { GoogleSvg } from "@/components/svgs/google-svg";

export const signInSocials = [
  {
    id: "discord",
    name: "Discord",
    icon: DiscordSvg,
    invertColor: false,
  },
  {
    id: "github",
    name: "GitHub",
    icon: GitHubSvg,
    invertColor: true,
  },
  {
    id: "google",
    name: "Google",
    icon: GoogleSvg,
    invertColor: false,
  },
] as const;
