export const ROLE_OPTIONS = ["Member", "Manager"] as const;

export type Role = (typeof ROLE_OPTIONS)[number];
