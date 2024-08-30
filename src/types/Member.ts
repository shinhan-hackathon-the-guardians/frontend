export type Member = {
  id: number;
  name: string;
  birthday: string;
  level: "GUARDIAN" | "SUPPORTER";
  role: "멤버" | "매니저" | "오너";
  relationship: string;
  isPinned: boolean;
};
