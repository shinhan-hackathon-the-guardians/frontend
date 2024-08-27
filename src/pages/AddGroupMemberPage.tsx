import React, { useState } from "react";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField";
import Button from "@/components/common/Button";
import { RELATIONSHIP_OPTIONS, Relationship } from "@/constant/relationship";

const AddGroupMemberPage: React.FC = () => {
  const [relationship, setRelationship] = useState<Relationship>("할아버지");

  const handleRelationshipChange = (value: Relationship) => {
    setRelationship(value);
  };

  const handleAddMember = () => {
    // 멤버 추가 로직
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeaderBackChatNotify />
      <div className="flex-1 px-4 py-6 flex flex-col justify-between">
        <div>
          <InputField label="이름" placeholder="이름을 입력해주세요." />
          <InputField label="전화번호" placeholder="전화번호를 입력해주세요." type="tel" />
          <SelectField
            label="관계"
            options={RELATIONSHIP_OPTIONS}
            value={relationship}
            onChange={handleRelationshipChange}
          />
        </div>
        <Button text="그룹원 추가하기" onClick={handleAddMember} />
      </div>
    </div>
  );
};

export default AddGroupMemberPage;
