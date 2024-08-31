export const ROLE_OPTIONS = ["MEMBER", "MANAGER"] as const;

export type Role = (typeof ROLE_OPTIONS)[number];
