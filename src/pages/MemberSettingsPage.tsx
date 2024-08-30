import { useEffect, useState } from "react";
import { PERIOD_OPTIONS, Period } from "@/constant/period";
import { Role, ROLE_OPTIONS } from "@/constant/role";
import { useAuthStore } from "@/stores/userAuthStore";
import { useNavigation } from "@/hooks/useNavigation";
import { MemberSettings } from "@/types/GroupSettings";
import {
  getMemberSettingsInfo,
  updateMemberSettings,
  updateMemberLevel,
} from "@/services/groupSettingsService";

import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField";
import Loading from "@/components/common/Loading";

const MemberSettingsPage = () => {
  const [memberSettings, setMemberSettings] = useState<MemberSettings>({
    target_user_id: 1, // Assuming this is a constant value
    role: ROLE_OPTIONS[0],
    single_transaction_limit: 0,
    max_limit_amount: 0,
    period: PERIOD_OPTIONS[0],
  });
  const [isLoading, setIsLoading] = useState(true);
  const { goToGroupMemberList } = useNavigation();
  const { user } = useAuthStore();
  const family_id = user?.familyId;

  useEffect(() => {
    const fetchMemberSettings = async () => {
      try {
        const fetchedSettings = await getMemberSettingsInfo(family_id!);
        setMemberSettings(fetchedSettings);
      } catch (error) {
        console.error("그룹 설정 불러오기 실패:", error);
        alert("그룹 설정을 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemberSettings();
  }, [family_id]);

  const handleInputChange = (key: keyof MemberSettings) => (value: string | Role | Period) => {
    setMemberSettings((prev) => ({ ...prev, [key]: value }));
  };

  // 그룹원 세부 설정 - level 변경
  const handleSaveRole = async () => {
    try {
      await updateMemberLevel(family_id!, {
        target_user_id: memberSettings.target_user_id,
        new_role: memberSettings.role,
      });
      goToGroupMemberList();
    } catch (error) {
      console.error("Error saving role:", error);
      alert("Failed to save role");
    }
  };

  // 그룹원 세부 설정 - 기한 및 한도 변경
  const handleSaveLimit = async () => {
    try {
      await updateMemberSettings(family_id!, {
        target_user_id: memberSettings.target_user_id,
        single_transaction_limit: memberSettings.single_transaction_limit,
        max_limit_amount: memberSettings.max_limit_amount,
        period: memberSettings.period,
      });
      goToGroupMemberList();
    } catch (error) {
      console.error("Error saving limit:", error);
      alert("Failed to save limit");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBackChatNotify />
      <main className="flex px-4 py-6 flex-col justify-between">
        <section className="mb-6">
          <h1 className="text-xl font-bold text-Button mb-2">권한 설정</h1>
          <div className="flex flex-col bg-white rounded-lg p-4 items-end">
            <SelectField<Role>
              label="권한"
              options={ROLE_OPTIONS}
              value={memberSettings.role}
              onChange={handleInputChange("role")}
            />
            <button
              className="text-Button text-md mt-5 me-2 cursor-pointer hover:text-Button"
              onClick={handleSaveRole}
            >
              저장
            </button>
          </div>
        </section>

        <section>
          <h1 className="text-xl font-bold text-Button mb-2">한도 설정</h1>
          <div className="flex flex-col bg-white rounded-lg p-4 items-end">
            <InputField
              label="1회 한도"
              placeholder="1회 한도를 입력해주세요."
              type="number"
              value={memberSettings.single_transaction_limit.toString()}
              onChange={(value) => handleInputChange("single_transaction_limit")(value)}
            />
            <InputField
              label="기한 한도"
              placeholder="기한 한도를 입력해주세요."
              type="number"
              value={memberSettings.max_limit_amount.toString()}
              onChange={(value) => handleInputChange("max_limit_amount")(value)}
            />
            <SelectField<Period>
              label="기한"
              options={PERIOD_OPTIONS}
              value={memberSettings.period}
              onChange={handleInputChange("period")}
            />
            <button
              className="text-Button text-md mt-5 me-2 cursor-pointer hover:text-Button"
              onClick={handleSaveLimit}
            >
              저장
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MemberSettingsPage;
