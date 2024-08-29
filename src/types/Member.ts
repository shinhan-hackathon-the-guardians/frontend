export type Member = {
  id: number;
  name: string;
  birthday: string;
  level: boolean;
  role: "멤버" | "매니저" | "오너";
  relationship: string;
  isPinned: boolean;
};
