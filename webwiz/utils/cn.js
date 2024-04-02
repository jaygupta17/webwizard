import { clsx } from "clsx";

export function cn(...inputs) {
  // Since ClassValue type isn't directly available in JavaScript, we can assume it represents a string or array of strings (classNames)
  return clsx(...inputs);
}
