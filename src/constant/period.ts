export const PERIOD_OPTIONS = ["DAY1", "DAY7", "DAY15", "DAY30"] as const;

export type Period = (typeof PERIOD_OPTIONS)[number];
