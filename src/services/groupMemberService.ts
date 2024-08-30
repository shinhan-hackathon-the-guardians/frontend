import axiosInstance from "./axiosInstance";
import { FamilyResponse } from "@/types/Response";

export const getGroupMemberList = async (familyId: string): Promise<FamilyResponse> => {
  try {
    const response = await axiosInstance.get<FamilyResponse>(`/family/${familyId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch group member list", error);
    throw error;
  }
};

export const postGroupMemberInvite = async (
  familyId: string,
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
