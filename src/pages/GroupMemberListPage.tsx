import React, { useState } from "react";
import GroupMemberList from "@/components/GroupMemberList/GroupMemberList";
import Button from "@/components/common/Button";

const GroupMemberListPage: React.FC = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "김기훈",
      role: "할아버지",
      position: "서포터",
      phone: "010-1234-5678",
      isPinned: false,
    },
    { id: 2, name: "김영희", position: "서포터", phone: "010-2345-6789", isPinned: true },
    { id: 3, name: "고영이", position: "서포터", phone: "010-1234-5678", isPinned: false },
    { id: 4, name: "고먐미", position: "가디언", phone: "010-1234-5678", isPinned: false },
    { id: 5, name: "고향희", position: "서포터", phone: "010-1234-5678", isPinned: false },
    { id: 6, name: "고란이", position: "서포터", phone: "010-1234-5678", isPinned: false },
    { id: 7, name: "노란이", position: "서포터", phone: "010-1234-5678", isPinned: false },
  ]);

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
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white p-4 shadow">
        <h1 className="text-xl font-semibold">그룹</h1>
      </header>
      <main className="flex-grow overflow-y-auto">
        <GroupMemberList members={members} onPinToggle={handlePinToggle} />
      </main>
      <footer className="p-4">
        <Button text="그룹원 추가하기" onClick={handleAddMember} />
      </footer>
    </div>
  );
};

export default GroupMemberListPage;
