import { formatStorageKey } from "@/functions/format-storage-key";

export const keys = {
	THEME: formatStorageKey("theme"),
} as const;
