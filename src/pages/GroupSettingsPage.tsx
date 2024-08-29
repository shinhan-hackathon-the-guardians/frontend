import { useState } from "react";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import InputField from "@/components/common/InputField";
import { updateGroupSettings } from "@/services/groupSettingsService";
import { GroupSettings } from "@/types/GroupSettings";
import { useNavigation } from "@/hooks/useNavigation";

const family_id = "1";

const GroupSettingsPage = () => {
  const [groupSettings, setGroupSettings] = useState<GroupSettings>({
    groupName: "신한이네",
    groupMotto: "건강이 최고",
    approvalLimit: 1,
    creationDate: "2024.08.29",
  });
  const { goToBack } = useNavigation();

  const handleInputChange = (key: keyof GroupSettings) => (value: string) => {
    setGroupSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = async () => {
    try {
      await updateGroupSettings(family_id, groupSettings);
      alert("그룹 설정이 성공적으로 저장되었습니다.");
      goToBack();
    } catch (error) {
      console.error("그룹 설정 저장 실패:", error);
      alert("그룹 설정 저장에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBackChatNotify />
      <main className="flex px-4 py-6 flex-col justify-between">
        <h1 className="text-xl font-bold text-Button mb-2">그룹 설정</h1>
        <div className="flex flex-col bg-white rounded-lg p-4 items-end">
          <InputField
            label="그룹명"
            placeholder="그룹명을 입력해주세요."
            value={groupSettings.groupName}
            onChange={handleInputChange("groupName")}
          />
          <InputField
            label="그룹 표어"
            placeholder="그룹 표어를 입력해주세요."
            value={groupSettings.groupMotto}
            onChange={handleInputChange("groupMotto")}
          />
          <InputField
            label="승인 인원 숫자"
            placeholder="승인 인원 숫자를 입력해주세요."
            type="number"
            value={groupSettings.approvalLimit.toString()}
            onChange={(value) => handleInputChange("approvalLimit")(value)}
          />
          <div className="w-full mb-8 text-grey">
            <label className="block text-md font-semibold mb-2">
              그룹 개설일
            </label>
            <div className="w-full border-b-2 border-grey p-2 text-lg">
              {groupSettings.creationDate}
            </div>
          </div>
          <button
            className="text-Button text-md mt-5 me-2 cursor-pointer hover:text-Button"
            onClick={handleSaveSettings}
          >
            저장
          </button>
        </div>
      </main>
    </div>
  );
};

export default GroupSettingsPage;
