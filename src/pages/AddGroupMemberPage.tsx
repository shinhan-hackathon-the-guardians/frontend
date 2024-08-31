import React, { useState } from "react";
import { useAuthStore } from "@/stores/userAuthStore";
import { postGroupMemberInvite } from "@/services/groupMemberService";
import { RELATIONSHIP_OPTIONS, Relationship } from "@/constant/relationship";
import { useNavigation } from "@/hooks/useNavigation";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField";
import Button from "@/components/common/Button";

const AddGroupMemberPage: React.FC = () => {
  const [relationship, setRelationship] = useState<Relationship>(
    RELATIONSHIP_OPTIONS[RELATIONSHIP_OPTIONS.length - 1]
  );
  const [name, setName] = useState("");
  const [phoneParts, setPhoneParts] = useState(["010", "", ""]);
  const user = useAuthStore((state) => state.user);
  const { goToHome } = useNavigation();

  const handleRelationshipChange = (value: Relationship) => {
    setRelationship(value);
  };

  const handlePhoneChange = (index: number, value: string) => {
    const newPhoneParts = [...phoneParts];
    newPhoneParts[index] = value.replace(/\D/g, "").slice(0, index === 0 ? 3 : 4);
    setPhoneParts(newPhoneParts);

    if (value.length === (index === 0 ? 3 : 4) && index < 2) {
      document.getElementById(`phonePart${index + 2}`)?.focus();
    }
  };

  const handleAddMember = async () => {
    if (!user || !user.familyId) {
      console.error("사용자 정보 또는 가족 ID가 없습니다.");
      return;
    }

    const formattedPhoneNumber = phoneParts.join("-");

    try {
      await postGroupMemberInvite(user.familyId, name, formattedPhoneNumber, relationship);
      console.log("그룹원 초대가 성공적으로 전송되었습니다.");
      goToHome();
    } catch (error) {
      console.error("그룹원 초대 중 오류가 발생했습니다.", error);
    }
  };

  const renderPhoneInputs = () => (
    <div className="flex items-center space-x-2">
      {[0, 1, 2].map((index) => (
        <React.Fragment key={index}>
          <input
            id={`phonePart${index + 1}`}
            type="text"
            value={phoneParts[index]}
            onChange={(e) => handlePhoneChange(index, e.target.value)}
            className="w-1/3 text-sm border font-normal rounded p-1 mt-2 text-center outline-none focus:border-Button focus:border-2"
            maxLength={index === 0 ? 3 : 4}
          />
          {index < 2 && <span>-</span>}
        </React.Fragment>
      ))}
    </div>
  );

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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
            {renderPhoneInputs()}
          </div>
          <SelectField<Relationship>
            label="관계"
            options={RELATIONSHIP_OPTIONS}
            value={relationship}
            onChange={handleRelationshipChange}
          />
        </div>
        <Button text="그룹원 초대하기" onClick={handleAddMember} />
      </main>
    </div>
  );
};

export default AddGroupMemberPage;
