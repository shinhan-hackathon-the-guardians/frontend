export interface User {
  userId: number;
  userName: string;
  level: "GUARDIAN" | "SUPPORTER";
  role: "NONE" | "MEMBER" | "MANAGER" | "OWNER";
  familyId: number;
  familyName: string;
}
