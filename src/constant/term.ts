export const TERM_OPTIONS = ["일주일", "15일", "한달"] as const;

export type Term = (typeof TERM_OPTIONS)[number];
