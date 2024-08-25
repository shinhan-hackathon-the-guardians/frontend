import React, { useState, useEffect } from "react";
import HeaderBackChatNotify from "@/components/Header/HeaderBackChatNotify";
import GroupMemberList from "@/components/GroupMemberList/GroupMemberList";
import Button from "@/components/common/Button";
// import { getGroupMemberList } from "@/services/groupMemberService";
import { Member } from "@/types/Member";
import { members as dummyMembers } from "@/utils/data";

const GroupMemberListPage: React.FC = () => {
  // useState의 타입을 명시적으로 설정
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setMembers(dummyMembers);
      // try {
      //   const data = await getGroupMemberList();
      //   setMembers(data); // 데이터를 상태로 설정
      // } catch (error) {
      //   console.error("그룹원 목록을 불러오는 데 실패했습니다.", error);
      // }
    };

    fetchData(); // 데이터 가져오기 실행
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
    <>
      <HeaderBackChatNotify />
      <main className="flex-grow overflow-y-auto scrollbar-hide">
        <GroupMemberList members={members} onPinToggle={handlePinToggle} />
      </main>
      <footer className="p-4">
        <Button text="그룹원 추가하기" onClick={handleAddMember} />
      </footer>
    </>
  );
};

export default GroupMemberListPage;
