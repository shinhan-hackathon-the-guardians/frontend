export interface User {
  userId: string;
  userName: string;
  level: "GUARDIAN" | "SUPPORTER";
  role: "NONE" | "MEMBER" | "MANAGER" | "OWNER";
  familyId: string;
  familyName: string;
}
