import { Member } from "@/types/Member";
import { Question } from "@/types/Question";

export const members: Member[] = [
  {
    id: 1,
    name: "김신한",
    relationship: "아버지",
    role: "오너",
    birthday: "1975.05.15",
    level: true,
    isPinned: true,
  },
  {
    id: 2,
    name: "이서준",
    relationship: "할아버지",
    role: "멤버",
    birthday: "1950.11.22",
    level: false,
    isPinned: true,
  },
  {
    id: 3,
    name: "박민준",
    relationship: "형제",
    role: "멤버",
    birthday: "1990.03.07",
    level: false,
    isPinned: false,
  },
  {
    id: 4,
    name: "최서현",
    relationship: "어머니",
    role: "매니저",
    birthday: "1978.09.30",
    level: true,
    isPinned: false,
  },
  {
    id: 5,
    name: "장하영",
    relationship: "할머니",
    role: "멤버",
    birthday: "1953.02.14",
    level: false,
    isPinned: true,
  },
  {
    id: 6,
    name: "윤도현",
    relationship: "형제",
    role: "멤버",
    birthday: "1988.12.01",
    level: false,
    isPinned: false,
  },
  {
    id: 7,
    name: "김수연",
    relationship: "자매",
    role: "매니저",
    birthday: "1985.07.19",
    level: true,
    isPinned: false,
  },
  {
    id: 8,
    name: "이하은",
    relationship: "딸",
    role: "멤버",
    birthday: "2000.04.26",
    level: false,
    isPinned: true,
  },
  {
    id: 9,
    name: "정재훈",
    relationship: "아들",
    role: "멤버",
    birthday: "1998.08.11",
    level: false,
    isPinned: false,
  },
  {
    id: 10,
    name: "오지훈",
    relationship: "기타",
    role: "멤버",
    birthday: "1970.10.03",
    level: true,
    isPinned: false,
  },
];

export const financeQuestions: Question[] = [
  {
    answer: "incorrect",
    question:
      "주식 시장에서 '불마켓'은 주식 가격이 하락하는 시장을 의미합니다.",
    explanation:
      "'불마켓'은 주식 가격이 상승하는 시장을 의미합니다. 주식 가격이 하락하는 시장은 '약세장'입니다.",
  },
  {
    answer: "incorrect",
    question: "인플레이션이 높아지면, 채권의 실제 수익률은 증가합니다.",
    explanation:
      "인플레이션이 높아지면 채권의 실제 수익률은 감소합니다. 채권의 명목 수익률은 변하지 않지만, 인플레이션에 의해 실제 구매력이 감소하기 때문입니다.",
  },
  {
    answer: "incorrect",
    question: "주식의 배당금은 회사의 이익에 관계없이 정기적으로 지급됩니다.",
    explanation:
      "배당금은 회사의 이익에 따라 지급됩니다. 이익이 없거나 부족할 경우 배당금이 지급되지 않을 수 있습니다.",
  },
  {
    answer: "incorrect",
    question: "신용카드의 이자율은 대출의 고정금리와 동일합니다.",
    explanation:
      "신용카드의 이자율은 대출의 고정금리와 다를 수 있습니다. 신용카드 이자율은 일반적으로 변동금리로, 카드사 정책에 따라 다릅니다.",
  },
  {
    answer: "incorrect",
    question: "주식 시장에서 '포트폴리오'는 단일 주식을 의미합니다.",
    explanation:
      "'포트폴리오'는 여러 주식 및 다른 자산으로 구성된 투자 집합을 의미합니다.",
  },
  {
    answer: "incorrect",
    question:
      "주식의 '기본 분석'은 회사의 재무제표를 분석하여 주식의 가치를 결정하는 것입니다.",
    explanation:
      "기본 분석은 회사의 재무제표와 경영진의 능력, 시장 조건 등을 분석하여 주식의 가치를 평가하는 방법입니다.",
  },
  {
    answer: "incorrect",
    question: "금융 상품에서 '자본 이득'은 소득세와 관련이 없습니다.",
    explanation:
      "'자본 이득'은 자산을 매각했을 때 발생한 이익으로, 소득세의 대상이 됩니다.",
  },
  {
    answer: "incorrect",
    question: "부동산 투자에서 '캐시플로우'는 주택의 시장 가치를 의미합니다.",
    explanation:
      "'캐시플로우'는 부동산 투자에서 발생하는 현금 흐름을 의미하며, 시장 가치는 아닙니다.",
  },
  {
    answer: "incorrect",
    question: "주식 시장에서 '배당금'은 주식 가격과 관련이 없습니다.",
    explanation:
      "'배당금'은 주식 가격과 관련이 있으며, 주식의 수익성 지표로 활용됩니다.",
  },
  {
    answer: "incorrect",
    question: "선물 계약에서 '스팟 가격'은 계약 체결 당시의 가격을 의미합니다.",
    explanation:
      "'스팟 가격'은 현재 시장에서 자산이 거래되는 가격을 의미하며, 선물 계약에서는 계약 체결 이후의 가격이 아닙니다.",
  },
];
