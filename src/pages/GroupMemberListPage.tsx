import React, { useState, useEffect } from "react";
import HeaderBackSetting from "@/components/Header/HeaderBackSetting";
import GroupInfo from "@/components/GroupMemberList/GroupInfo";
import GroupMemberList from "@/components/GroupMemberList/GroupMemberList";
import { Member } from "@/types/Member";
import { getGroupMemberList } from "@/services/groupMemberService";

const GroupMemberListPage: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [familyName, setFamilyName] = useState<string>("");
  const [familyDescription, setFamilyDescription] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const familyId = 1; // 가족 ID를 적절히 설정해주세요
        const data = await getGroupMemberList(familyId);
        setMembers(data.users);
        setFamilyName(data.name);
        setFamilyDescription(data.description);
      } catch (error) {
        console.error("그룹원 목록을 불러오는 데 실패했습니다.", error);
      }
    };

    fetchData();
  }, []);

  const handlePinToggle = (id: number) => {
    setMembers(
      members.map((member) =>
        member.id === id ? { ...member, isPinned: !member.isPinned } : member
      )
    );
  };

  const handleAddMember = () => {
    // 멤버 추가 로직
  };

  return (
    <div className="flex flex-col h-screen">
      <HeaderBackSetting />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <GroupInfo
          name={familyName}
          description={familyDescription}
          memberCount={members.length}
        />
        <GroupMemberList
          members={members}
          onPinToggle={handlePinToggle}
          handleAddMember={handleAddMember}
        />
      </main>
    </div>
  );
};

export default GroupMemberListPage;
