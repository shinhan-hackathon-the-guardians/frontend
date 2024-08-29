export interface User {
  name: string;
  level: "GUARDIAN" | "SUPPORTER";
  role: "NONE" | "MEMBER" | "MANAGER" | "OWNER";
  familyId: string;
  familyName: string;
}
