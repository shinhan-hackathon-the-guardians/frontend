import React, { useState, useEffect } from "react";
import { useAuthStore } from "@/stores/userAuthStore";
import { getGroupMemberList } from "@/services/groupMemberService";
import { useNavigation } from "@/hooks/useNavigation";
import { Member } from "@/types/Member";

import HeaderBackSetting from "@/components/Header/HeaderBackSetting";
import GroupInfo from "@/components/GroupMemberList/GroupInfo";
import GroupMemberList from "@/components/GroupMemberList/GroupMemberList";
import Loading from "@/components/common/Loading";

const GroupMemberListPage: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [familyName, setFamilyName] = useState<string>("아직 그룹이 없습니다.");
  const [familyDescription, setFamilyDescription] =
    useState<string>("하단의 +버튼으로 그룹원을 초대해 주세요.");
  const [isAddEnabled, setIsAddEnabled] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useAuthStore();
  const { goToAddGroupMember } = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const familyId = user?.familyId;
        if (familyId) {
          const data = await getGroupMemberList(familyId);
          setMembers(data.user_list);
          setFamilyName(data.name);
          setFamilyDescription(data.description);
        }
      } catch (error) {
        console.error("그룹원 목록을 불러오는 데 실패했습니다.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    setIsAddEnabled(!!user?.familyId && user?.role === "OWNER" && members.length < 12);
  }, [user]);

  const handlePinToggle = (id: number) => {
    setMembers(
      members.map((member) =>
        member.id === id ? { ...member, isPinned: !member.isPinned } : member
      )
    );
  };

  const handleAddMember = () => {
    goToAddGroupMember();
  };

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col h-screen">
      <HeaderBackSetting />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <GroupInfo name={familyName} description={familyDescription} memberCount={members.length} />
        <GroupMemberList
          members={members}
          onPinToggle={handlePinToggle}
          handleAddMember={handleAddMember}
          isAddEnabled={isAddEnabled}
        />
      </main>
    </div>
  );
};

export default GroupMemberListPage;
