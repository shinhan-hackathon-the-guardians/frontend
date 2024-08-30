import axiosInstance from "./axiosInstance";
import {
  MemberSettings,
  MemberSettingsRequest,
  MemberLevelSettingsRequest,
} from "@/types/GroupSettings";

// 그룹원 세부 설정 받아오기
export const getMemberSettingsInfo = async (family_id: string): Promise<MemberSettings> => {
  try {
    const response = await axiosInstance.get<MemberSettings>(`/family/${family_id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching group info:", error);
    throw error;
  }
};

// 그룹원 세부 설정 - 한도 설정 수정
export const updateMemberSettings = async (
  family_id: string,
  settings: MemberSettingsRequest
): Promise<void> => {
  try {
    await axiosInstance.put(`/family/${family_id}/userRole`, settings);
  } catch (error) {
    console.error("Error updating group settings:", error);
    throw error;
  }
};

// 그룹원 세부 설정 - 권한 설정 수정
export const updateMemberLevel = async (settings: MemberLevelSettingsRequest): Promise<void> => {
  try {
    await axiosInstance.put(`/limit`, settings);
  } catch (error) {
    console.error("Error updating group settings:", error);
    throw error;
  }
};
