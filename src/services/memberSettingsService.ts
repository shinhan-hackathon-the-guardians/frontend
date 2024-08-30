import { Role } from "@/constant/role";
import axiosInstance from "./axiosInstance";
import {
  MemberSettings,
  MemberSettingsRequest,
  MemberLevelSettingsRequest,
} from "@/types/GroupSettings";

// 그룹원 세부 설정 - 한도 받아오기
export const getMemberSettingsInfo = async (target_user_id: number): Promise<MemberSettings> => {
  try {
    const response = await axiosInstance.get<MemberSettings>(`/limit/user/${target_user_id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching group settings info:", error);
    throw error;
  }
};

// 그룹원 세부 설정 - 권한 받아오기
export const getMemberLevelInfo = async (
  family_id: number,
  target_user_id: number
): Promise<{ user_id: string; role: Role }> => {
  try {
    const response = await axiosInstance.get(`/family/${family_id}/userRole/${target_user_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching member level info:", error);
    throw error;
  }
};

// 그룹원 세부 설정 - 한도 설정 수정
export const updateMemberSettings = async (settings: MemberSettingsRequest): Promise<void> => {
  try {
    await axiosInstance.put(`/limit`, settings);
  } catch (error) {
    console.error("Error updating member settings:", error);
    throw error;
  }
};

// 그룹원 세부 설정 - 권한 설정 수정
export const updateMemberLevel = async (
  family_id: number,
  target_user_id: number,
  settings: MemberLevelSettingsRequest
): Promise<void> => {
  try {
    console.log(settings);
    await axiosInstance.put(`/family/${family_id}/userRole/${target_user_id}`, settings);
  } catch (error) {
    console.error("Error updating member level:", error);
    throw error;
  }
};
