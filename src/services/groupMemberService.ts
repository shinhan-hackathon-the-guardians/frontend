import axiosInstance from "./axiosInstance";
import { GroupListResponse } from "@/types/GroupSettings";

export const getGroupMemberList = async (familyId: number): Promise<GroupListResponse> => {
  try {
    const response = await axiosInstance.get<GroupListResponse>(`/family/${familyId}/users`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch group member list", error);
    throw error;
  }
};

export const postGroupMemberInvite = async (
  familyId: number,
  name: string,
  phone_number: string
): Promise<void> => {
  try {
    const payload = {
      name,
      phone_number,
    };
    await axiosInstance.post(`/family/${familyId}/invite`, payload);
  } catch (error) {
    console.error("Failed to invite group member", error);
    throw error;
  }
};
