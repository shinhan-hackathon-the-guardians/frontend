export const RELATIONSHIP_OPTIONS = [
  "할아버지",
  "할머니",
  "아버지",
  "어머니",
  "형제",
  "자매",
  "딸",
  "아들",
  "기타",
] as const;

export type Relationship = (typeof RELATIONSHIP_OPTIONS)[number];
