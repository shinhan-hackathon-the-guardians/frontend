export type Member = {
  id: number;
  name: string;
  phone_number: string;
  level: "오너" | "매니저" | "멤버";
  role: "none" | "member" | "manager" | "owner";
  relationship: string;
  isPinned: boolean;
};
