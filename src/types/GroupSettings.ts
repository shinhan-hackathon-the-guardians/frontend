import { Member } from "@/types/Member";

export interface GroupListResponse {
  name: string;
  description: string;
  approval_request: number;
  user_list: Member[];
}

// 그룹 세부 설정 받아오기
export interface GroupSettings {
  name: string;
  description: string;
  approval_request: number;
  created_at: string;
}

// 그룹 세부 설정 수정하기
export interface GroupSettingsRequest {
  name: string;
  description: string;
  approval_requirement: number;
}

// 그룹원 세부 설정 받아오기
export interface MemberSettings {
  target_user_id: number;
  period: string;
  single_transaction_limit: number;
  max_limit_amount: number;
}

// 그룹원 세부 설정 수정하기
export interface MemberSettingsRequest {
  target_user_id: number;
  period: string;
  single_transaction_limit: number;
  max_limit_amount: number;
}

// 그룹원 세부 설정 level 수정하기
export interface MemberLevelSettingsRequest {
  user_id: number;
  user_role: "MEMBER" | "MANAGER";
}
