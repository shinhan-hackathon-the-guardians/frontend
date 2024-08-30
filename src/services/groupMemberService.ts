import axiosInstance from "./axiosInstance";
import { FamilyResponse } from "@/types/Response";
import { members as dummyMembers } from "@/utils/data";

export const getGroupMemberList = async (familyId: string): Promise<FamilyResponse> => {
  return {
    name: "신한이네 가족",
    description: "우리 가족 행복하자~~",
    approval_request: 0,
    users: dummyMembers,
  };

  try {
    const response = await axiosInstance.get<FamilyResponse>(`/family/${familyId}`);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch group member list:", error);

    return {
      name: "Default Family",
      description: "This is a default family description.",
      approval_request: 0,
      users: dummyMembers,
    };
  }
};
