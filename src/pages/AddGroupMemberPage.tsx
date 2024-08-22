import React, { useState } from "react";
import InputField from "@/components/AddGroupMember/InputField";
import SelectField from "@/components/AddGroupMember/SelectField";
import { RELATIONSHIP_OPTIONS, Relationship } from "@/constant/relationship";

const AddGroupMemberPage: React.FC = () => {
  const [relationship, setRelationship] = useState<Relationship>("할아버지");

  const handleRelationshipChange = (value: Relationship) => {
    setRelationship(value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <form className="bg-gray-50 p-6 rounded-lg shadow-md">
        <InputField label="이름" placeholder="이름을 입력해주세요." />
        <InputField label="전화번호" placeholder="전화번호를 입력해주세요." type="tel" />
        <SelectField
          label="관계"
          options={RELATIONSHIP_OPTIONS}
          value={relationship}
          onChange={handleRelationshipChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          그룹원 추가하기
        </button>
      </form>
    </div>
  );
};

export default AddGroupMemberPage;
