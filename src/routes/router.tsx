import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import SplashScreen from "@/pages/SplashScreen";
import MainPage from "@/pages/MainPage";
import PaymentRequestPage from "@/pages/PaymentRequestPage";
import VerificationCodePage from "@/pages/VerificationCodePage";
import AddGroupMemberPage from "@/pages/AddGroupMemberPage";
import GroupMemberListPage from "@/pages/GroupMemberListPage";
import MemberSettingsPage from "@/pages/MemberSettingsPage";
import GroupSettingsPage from "@/pages/GroupSettingsPage";
import GuardianExamPage from "@/pages/GuardianExamPage";
import QuestionBankPage from "@/pages/QuestionBankPage";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import ChatBotPage from "@/pages/ChatBotPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <SplashScreen />,
      },
      {
        path: "main",
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
        path: "memberSettings/:target_user_id",
        element: <MemberSettingsPage />,
      },
      {
        path: "groupSettings",
        element: <GroupSettingsPage />,
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
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "chatbot",
        element: <ChatBotPage />,
      },
    ],
  },
]);

export default router;
