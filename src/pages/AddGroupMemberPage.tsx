import React, { useState } from "react";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField";
import Button from "@/components/common/Button";
import { RELATIONSHIP_OPTIONS, Relationship } from "@/constant/relationship";

const AddGroupMemberPage: React.FC = () => {
  const [relationship, setRelationship] = useState<Relationship>(
    RELATIONSHIP_OPTIONS[RELATIONSHIP_OPTIONS.length - 1]
  );
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const handleRelationshipChange = (value: Relationship) => {
    setRelationship(value);
  };

  const handleAddMember = () => {
    // 멤버 추가 로직
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBackChatNotify />
      <main className="flex-1 px-4 py-6 flex flex-col">
        <h1 className="text-xl font-bold text-Button mb-2">그룹원 추가</h1>
        <div className="bg-white rounded-lg p-4">
          <InputField
            label="이름"
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={setName}
          />
          <InputField
            label="전화번호"
            placeholder="전화번호를 입력해주세요."
            type="tel"
            value={tel}
            onChange={setTel}
          />
          <SelectField<Relationship>
            label="관계"
            options={RELATIONSHIP_OPTIONS}
            value={relationship}
            onChange={handleRelationshipChange}
          />
        </div>
        <Button text="그룹원 요청하기" onClick={handleAddMember} />
      </main>
    </div>
  );
};

export default AddGroupMemberPage;
