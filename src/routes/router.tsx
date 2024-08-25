import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import AddGroupMemberPage from "@/pages/AddGroupMemberPage";
import MainPage from "@/pages/MainPage";
import PaymentRequestPage from "@/pages/PaymentRequestPage";

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
    ],
  },
]);

export default router;
