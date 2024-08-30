import { Member } from "./Member";

export interface FamilyResponse {
  name: string;
  description: string;
  approval_request: number;
  users: Member[];
}

export interface ChatBotHistoryResponse {
  userId: string;
  message: string;
  from_user: boolean;
  timestamp: string;
}

export interface ChatResponse {
  message: string;
}
