import { Member } from "@/types/Member";

export const members: Member[] = [
  {
    id: 1,
    name: "김기훈",
    relationship: "할아버지",
    role: "manager", // Adjusted to match role types
    phone_number: "010-1234-5678",
    level: "가디언", // Must be "가디언" for manager or owner roles
    isPinned: false,
  },
  {
    id: 2,
    name: "이서준",
    relationship: "아버지",
    role: "member", // Valid role
    phone_number: "010-9876-5432",
    level: "서포터", // Valid level
    isPinned: false,
  },
  {
    id: 3,
    name: "박민준",
    relationship: "형제",
    role: "member", // Valid role
    phone_number: "010-1111-2222",
    level: "서포터", // Valid level
    isPinned: false,
  },
  {
    id: 4,
    name: "최서현",
    relationship: "어머니",
    role: "owner", // Adjusted to match role types
    phone_number: "010-3333-4444",
    level: "가디언", // Must be "가디언" for manager or owner roles
    isPinned: true,
  },
  {
    id: 5,
    name: "장하영",
    relationship: "할머니",
    role: "member", // Valid role
    phone_number: "010-5555-6666",
    level: "서포터", // Valid level
    isPinned: false,
  },
  {
    id: 6,
    name: "윤도현",
    relationship: "형제",
    role: "member", // Valid role
    phone_number: "010-7777-8888",
    level: "서포터", // Valid level
    isPinned: false,
  },
  {
    id: 7,
    name: "김수연",
    relationship: "자녀",
    role: "manager", // Adjusted to match role types
    phone_number: "010-9999-0000",
    level: "가디언", // Must be "가디언" for manager or owner roles
    isPinned: true,
  },
  {
    id: 8,
    name: "이하은",
    relationship: "자녀",
    role: "member", // Valid role
    phone_number: "010-1212-3434",
    level: "서포터", // Valid level
    isPinned: false,
  },
  {
    id: 9,
    name: "정재훈",
    relationship: "형제",
    role: "member", // Valid role
    phone_number: "010-5656-7878",
    level: "서포터", // Valid level
    isPinned: false,
  },
  {
    id: 10,
    name: "오지훈",
    relationship: "기타",
    role: "owner", // Adjusted to match role types
    phone_number: "010-9090-1010",
    level: "가디언", // Must be "가디언" for manager or owner roles
    isPinned: true,
  },
];
