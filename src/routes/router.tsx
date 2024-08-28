import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import AddGroupMemberPage from "@/pages/AddGroupMemberPage";
import MainPage from "@/pages/MainPage";
import PaymentRequestPage from "@/pages/PaymentRequestPage";
import VerificationCodePage from "@/pages/VerificationCodePage";
import GroupMemberListPage from "@/pages/GroupMemberListPage";
import QuestionBankPage from "@/pages/QuestionBankPage";
import GuardianExamPage from "@/pages/GuardianExamPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "addGroupMember",
        element: <AddGroupMemberPage />,
      },
      {
        path: "groupMemberList",
        element: <GroupMemberListPage />,
      },
      {
        path: "paymentRequest",
        element: <PaymentRequestPage />,
      },
      {
        path: "verification",
        element: <VerificationCodePage />,
      },
      {
        path: "questionBank",
        element: <QuestionBankPage />,
      },
      {
        path: "guardianExam",
        element: <GuardianExamPage />,
      },
    ],
  },
]);

export default router;
