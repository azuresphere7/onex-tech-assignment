import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Truncate a string from 0 to "limit" index
export function truncateTitle(title: string, limit: number) {
  return `${title.slice(0, limit)}...`;
}