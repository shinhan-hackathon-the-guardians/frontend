import { TOTAL_COUNT } from "@/constant/common";
import React from "react";

interface GroupInfoProps {
  name: string;
  description: string;
  memberCount: number;
}

const GroupInfo: React.FC<GroupInfoProps> = ({ name, description, memberCount }) => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-sm text-gray-500 mt-2">
        {memberCount}/{TOTAL_COUNT}
      </p>
    </div>
  );
};

export default GroupInfo;
