import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names from tailwindcss and clsx.
 *
 * @param {...inputs} - A variable number of class names to merge.
 * @returns {string} - A string containing the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
