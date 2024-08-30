import { useEffect, useState } from "react";
import { getGroupSettingsInfo, updateGroupSettings } from "@/services/groupSettingsService";
import { useAuthStore } from "@/stores/userAuthStore";
import { GroupSettings } from "@/types/GroupSettings";
import { GroupSettingsRequest } from "@/types/GroupSettings";
import { useNavigation } from "@/hooks/useNavigation";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import InputField from "@/components/common/InputField";
import Loading from "@/components/common/Loading";

const GroupSettingsPage = () => {
  const [groupSettings, setGroupSettings] = useState<GroupSettings>({
    name: "",
    description: "",
    approval_request: 1,
    created_at: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const { goToGroupMemberList } = useNavigation();
  const { user } = useAuthStore();
  const family_id = user?.familyId;

  useEffect(() => {
    const fetchGroupSettings = async () => {
      try {
        const fetchedSettings = await getGroupSettingsInfo(family_id!);
        setGroupSettings(fetchedSettings);
      } catch (error) {
        console.error("그룹 설정 불러오기 실패:", error);
        alert("그룹 설정을 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGroupSettings();
  }, [family_id]);

  const handleInputChange = (key: keyof GroupSettings) => (value: string) => {
    setGroupSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = async () => {
    try {
      const settingsToUpdate: GroupSettingsRequest = {
        name: groupSettings.name,
        description: groupSettings.description,
        approval_requirement: groupSettings.approval_request,
      };
      await updateGroupSettings(family_id!, settingsToUpdate);
      alert("그룹 설정이 성공적으로 저장되었습니다.");
      goToGroupMemberList();
    } catch (error) {
      console.error("그룹 설정 저장 실패:", error);
      alert("그룹 설정 저장에 실패했습니다.");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBackChatNotify />
      <main className="flex px-4 py-6 flex-col justify-between">
        <h1 className="text-xl font-bold text-Button mb-2">그룹 설정</h1>
        <div className="flex flex-col bg-white rounded-lg p-4 items-end">
          <InputField
            label="그룹명"
            placeholder="그룹명을 입력해주세요."
            value={groupSettings.name}
            onChange={handleInputChange("name")}
          />
          <InputField
            label="그룹 표어"
            placeholder="그룹 표어를 입력해주세요."
            value={groupSettings.description}
            onChange={handleInputChange("description")}
          />
          <InputField
            label="승인 인원 숫자"
            placeholder="승인 인원 숫자를 입력해주세요."
            type="number"
            value={groupSettings.approval_request.toString()}
            onChange={(value) => handleInputChange("approval_request")(value)}
          />
          <div className="w-full mb-8 text-grey">
            <label className="block text-md font-semibold mb-2">그룹 개설일</label>
            <div className="w-full border-b border-grey p-2 text-lg">
              {groupSettings.created_at}
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
