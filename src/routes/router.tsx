import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import AddGroupMemberPage from "@/pages/AddGroupMemberPage";
import MainPage from "@/pages/MainPage";
import PaymentRequestPage from "@/pages/PaymentRequestPage";
import VerificationCodePage from "@/pages/VerificationCodePage";
import GroupMemberListPage from "@/pages/GroupMemberListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "addGroupMember",
        element: <AddGroupMemberPage />,
      },
      {
        index: true,
        element: <MainPage />,
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
        path: "groupMemberList",
        element: <GroupMemberListPage />,
      },
    ],
  },
]);

export default router;
