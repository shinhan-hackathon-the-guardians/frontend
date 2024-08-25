export type Member = {
  id: number;
  name: string;
  phone_number: string;
  level: "가디언" | "서포터";
  role: "none" | "member" | "manager" | "owner";
  relationship: string;
  isPinned: boolean;
};
