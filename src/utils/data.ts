import { Member } from "@/types/Member";
import { Question } from "@/types/Question";

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

export const financeQuestions: Question[] = [
  {
    answer: "correct",
    question: "이자율이 5%인 대출을 상환할 때, 원금이 1000달러면 연간 이자는 얼마인가요?",
    explanation: "연간 이자는 원금에 이자율을 곱한 값으로, 1000달러의 5%는 50달러입니다."
  },
  {
    answer: "incorrect",
    question: "고정금리 대출의 이자율은 대출 기간 동안 변동이 있나요?",
    explanation: "고정금리 대출의 이자율은 대출 기간 동안 변동이 없습니다."
  },
  {
    answer: "correct",
    question: "복리 계산에서 이자는 매년 원금과 이자를 포함하여 계산됩니다. 이는 무엇이라고 하나요?",
    explanation: "복리 계산에서는 이자도 원금에 포함되어 이자가 다시 이자를 생성합니다. 이를 복리라고 합니다."
  },
  {
    answer: "incorrect",
    question: "주식 시장에서 '불마켓'은 주식 가격이 하락하는 시장을 의미합니다.",
    explanation: "'불마켓'은 주식 가격이 상승하는 시장을 의미합니다. 주식 가격이 하락하는 시장은 '약세장'입니다."
  },
  {
    answer: "correct",
    question: "연금의 현재 가치 계산에서, 미래 가치가 더 낮아지는 이유는 무엇인가요?",
    explanation: "연금의 현재 가치는 미래 가치가 할인되어 현재 가치를 계산하기 때문에 낮아집니다."
  },
  {
    answer: "incorrect",
    question: "인플레이션이 높아지면, 채권의 실제 수익률은 증가합니다.",
    explanation: "인플레이션이 높아지면 채권의 실제 수익률은 감소합니다. 채권의 명목 수익률은 변하지 않지만, 인플레이션에 의해 실제 구매력이 감소하기 때문입니다."
  },
  {
    answer: "correct",
    question: "금융 자산에서 '다각화'란 무엇을 의미하나요?",
    explanation: "다각화는 투자 포트폴리오를 여러 자산으로 나누어 위험을 줄이는 전략을 의미합니다."
  },
  {
    answer: "incorrect",
    question: "주식의 배당금은 회사의 이익에 관계없이 정기적으로 지급됩니다.",
    explanation: "배당금은 회사의 이익에 따라 지급됩니다. 이익이 없거나 부족할 경우 배당금이 지급되지 않을 수 있습니다."
  },
  {
    answer: "correct",
    question: "모기지 대출에서 '고정금리'와 '변동금리'의 차이는 무엇인가요?",
    explanation: "'고정금리'는 대출 기간 동안 이자율이 변하지 않으며, '변동금리'는 시장 금리에 따라 이자율이 변동됩니다."
  },
  {
    answer: "incorrect",
    question: "신용카드의 이자율은 대출의 고정금리와 동일합니다.",
    explanation: "신용카드의 이자율은 대출의 고정금리와 다를 수 있습니다. 신용카드 이자율은 일반적으로 변동금리로, 카드사 정책에 따라 다릅니다."
  },
  {
    answer: "correct",
    question: "재무제표에서 '자산' 항목에는 어떤 것들이 포함될까요?",
    explanation: "'자산' 항목에는 현금, 재고, 계좌 채권, 부동산 등 기업이 소유하는 가치 있는 자산이 포함됩니다."
  },
  {
    answer: "incorrect",
    question: "주식 시장에서 '포트폴리오'는 단일 주식을 의미합니다.",
    explanation: "'포트폴리오'는 여러 주식 및 다른 자산으로 구성된 투자 집합을 의미합니다."
  },
  {
    answer: "correct",
    question: "채권의 '만기일'은 무엇을 의미하나요?",
    explanation: "'만기일'은 채권이 원금과 이자를 지급해야 하는 날짜를 의미합니다."
  },
  {
    answer: "incorrect",
    question: "주식의 '기본 분석'은 회사의 재무제표를 분석하여 주식의 가치를 결정하는 것입니다.",
    explanation: "기본 분석은 회사의 재무제표와 경영진의 능력, 시장 조건 등을 분석하여 주식의 가치를 평가하는 방법입니다."
  },
  {
    answer: "correct",
    question: "보험에서 '보험료'는 무엇을 의미하나요?",
    explanation: "'보험료'는 보험 가입자가 보험사에 정기적으로 지불하는 금액을 의미합니다."
  },
  {
    answer: "incorrect",
    question: "금융 상품에서 '자본 이득'은 소득세와 관련이 없습니다.",
    explanation: "'자본 이득'은 자산을 매각했을 때 발생한 이익으로, 소득세의 대상이 됩니다."
  },
  {
    answer: "correct",
    question: "회계에서 '감가상각'은 무엇을 의미하나요?",
    explanation: "'감가상각'은 자산의 가치가 시간이 지남에 따라 감소하는 것을 회계적으로 반영하는 방법입니다."
  },
  {
    answer: "incorrect",
    question: "부동산 투자에서 '캐시플로우'는 주택의 시장 가치를 의미합니다.",
    explanation: "'캐시플로우'는 부동산 투자에서 발생하는 현금 흐름을 의미하며, 시장 가치는 아닙니다."
  },
  {
    answer: "correct",
    question: "재무 분석에서 '유동성 비율'은 무엇을 측정하나요?",
    explanation: "'유동성 비율'은 기업이 단기 채무를 상환할 수 있는 능력을 측정하는 지표입니다."
  },
  {
    answer: "incorrect",
    question: "주식 시장에서 '배당금'은 주식 가격과 관련이 없습니다.",
    explanation: "'배당금'은 주식 가격과 관련이 있으며, 주식의 수익성 지표로 활용됩니다."
  },
  {
    answer: "correct",
    question: "부채 비율에서 '총 부채/자산 비율'은 무엇을 나타내나요?",
    explanation: "'총 부채/자산 비율'은 기업의 자산 대비 부채 비율을 나타내며, 재무 건전성을 평가하는 데 사용됩니다."
  },
  {
    answer: "incorrect",
    question: "선물 계약에서 '스팟 가격'은 계약 체결 당시의 가격을 의미합니다.",
    explanation: "'스팟 가격'은 현재 시장에서 자산이 거래되는 가격을 의미하며, 선물 계약에서는 계약 체결 이후의 가격이 아닙니다."
  }
];