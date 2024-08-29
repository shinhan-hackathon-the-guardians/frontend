import axiosInstance from "./axiosInstance";
import { GroupSettings } from "@/types/GroupSettings";

export const updateGroupSettings = async (
  family_id: string,
  settings: GroupSettings
): Promise<void> => {
  try {
    const response = await axiosInstance.put(`/family/${family_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    });

    if (!response) {
      throw new Error("Failed to update group settings");
    }
  } catch (error) {
    console.error("Error updating group settings:", error);
    throw error;
  }
};
