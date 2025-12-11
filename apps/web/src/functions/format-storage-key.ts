import { name, version } from "../../package.json";

export function formatStorageKey(key: string) {
  return `${name}:v${version}:${key}`;
}
