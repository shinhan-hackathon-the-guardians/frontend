import { useState } from "react";
import { TERM_OPTIONS, Term } from "@/constant/term";
import { Role, ROLE_OPTIONS } from "@/constant/role";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField";

const MemberSettingsPage = () => {
  const [role, setRole] = useState<Role>(ROLE_OPTIONS[0]);
  const [term, setTerm] = useState<Term>(TERM_OPTIONS[0]);
  const [oneTimeLimit, setOneTimeLimit] = useState("");
  const [periodLimit, setPeriodLimit] = useState("");

  const handleRoleChange = (value: Role) => {
    setRole(value);
  };

  const handleTermChange = (value: Term) => {
    setTerm(value);
  };

  const handleSaveRole = async () => {
    try {
      // API 요청 로직
      const response = await fetch("/api/save-role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role }),
      });
      if (!response.ok) throw new Error("Failed to save role");
      alert("Role saved successfully");
    } catch (error) {
      console.error("Error saving role:", error);
      alert("Failed to save role");
    }
  };

  const handleSaveLimit = async () => {
    try {
      // API 요청 로직
      const response = await fetch("/api/save-limit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ oneTimeLimit, periodLimit, term }),
      });
      if (!response.ok) throw new Error("Failed to save limit");
      alert("Limit saved successfully");
    } catch (error) {
      console.error("Error saving limit:", error);
      alert("Failed to save limit");
    }
  };

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
              value={role}
              onChange={handleRoleChange}
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
              value={oneTimeLimit}
              onChange={setOneTimeLimit}
            />
            <InputField
              label="기한 한도"
              placeholder="기한 한도를 입력해주세요."
              type="number"
              value={periodLimit}
              onChange={setPeriodLimit}
            />
            <SelectField<Term>
              label="권한"
              options={TERM_OPTIONS}
              value={term}
              onChange={handleTermChange}
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
