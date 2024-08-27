import { members as dummyMembers } from "@/utils/data";
import axiosInstance from "./axiosInstance";
import { FamilyResponse } from "@/types/Response";

export const getGroupMemberList = async (familyId: number): Promise<FamilyResponse> => {
  return {
    name: "Default Family",
    description: "This is a default family description.",
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
