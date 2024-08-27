import { TOTAL_COUNT } from "@/constant/common";
import React from "react";

interface GroupInfoProps {
  name: string;
  description: string;
  memberCount: number;
}

const GroupInfo: React.FC<GroupInfoProps> = ({
  name,
  description,
  memberCount,
}) => {
  return (
    <div className="pt-4 px-4 pb-1">
      <h2 className="text-lg font-semibold">{name}</h2>
      <div className="flex justify-between">
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-sm text-gray-500">
          {memberCount}/{TOTAL_COUNT}
        </p>
      </div>
    </div>
  );
};

export default GroupInfo;
