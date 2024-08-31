export type Member = {
  id: number;
  name: string;
  birthdate: string;
  level: "GUARDIAN" | "SUPPORTER";
  role: "MEMBER" | "MANAGER" | "OWNER";
  relationship: string;
  isPinned: boolean;
};
