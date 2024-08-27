import { Member } from "@/types/Member";
import axios from "axios";
import { members as dummyMembers } from "@/utils/data"; // 더미 데이터 가져오기

interface FamilyResponse {
  name: string;
  description: string;
  approval_request: number;
  users: Member[];
}

export const getGroupMemberList = async (familyId: number): Promise<FamilyResponse> => {
  return {
    name: "Default Family",
    description: "This is a default family description.",
    approval_request: 0,
    users: dummyMembers,
  };

  try {
    const response = await axios.get<FamilyResponse>(`/family/${familyId}`);

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
