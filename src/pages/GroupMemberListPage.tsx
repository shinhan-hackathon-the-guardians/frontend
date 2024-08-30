import React, { useState, useEffect } from "react";
import { useAuthStore } from "@/stores/userAuthStore";
import { getGroupMemberList } from "@/services/groupMemberService";
import { Member } from "@/types/Member";
import HeaderBackSetting from "@/components/Header/HeaderBackSetting";
import GroupInfo from "@/components/GroupMemberList/GroupInfo";
import GroupMemberList from "@/components/GroupMemberList/GroupMemberList";

const GroupMemberListPage: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [familyName, setFamilyName] = useState<string>("아직 그룹이 없습니다.");
  const [familyDescription, setFamilyDescription] =
    useState<string>("하단의 +버튼으로 그룹원을 초대해 주세요.");
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const familyId = user?.familyId || "1";
        if (familyId) {
          const data = await getGroupMemberList(familyId);
          setMembers(data.users);
          setFamilyName(data.name);
          setFamilyDescription(data.description);
        }
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
        <GroupInfo name={familyName} description={familyDescription} memberCount={members.length} />
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
