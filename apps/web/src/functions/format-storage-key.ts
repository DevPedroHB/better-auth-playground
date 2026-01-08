import { name, version } from "../../package.json";

/**
 * Format a storage key with the name and version of the package.
 *
 * @example
 * formatStorageKey("theme") // returns "@better-auth-playground/web:v1.0.0:theme"
 * @param {string} key - The storage key to format
 * @returns {string} The formatted storage key
 */
export function formatStorageKey(key: string) {
	return `${name}:v${version}:${key}`;
}
