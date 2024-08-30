export const PERIOD_OPTIONS = ["일주일", "15일", "한달"] as const;

export type Period = (typeof PERIOD_OPTIONS)[number];
