import axiosInstance from "./axiosInstance";
import { GroupSettings, GroupSettingsRequest } from "@/types/GroupSettings";

// 그룹 세부 설정 받아오기
export const getGroupSettingsInfo = async (family_id: number): Promise<GroupSettings> => {
  try {
    const response = await axiosInstance.get<GroupSettings>(`/family/${family_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching group info:", error);
    throw error;
  }
};

// 그룹 세부 설정 수정하기
export const updateGroupSettings = async (
  family_id: number,
  settings: GroupSettingsRequest
): Promise<void> => {
  try {
    await axiosInstance.put<GroupSettings>(`/family/${family_id}`, settings);
  } catch (error) {
    console.error("Error fetching group info:", error);
    throw error;
  }
};
