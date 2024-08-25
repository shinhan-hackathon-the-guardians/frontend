import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import AddGroupMemberPage from "@/pages/AddGroupMemberPage";
import MainPage from "@/pages/MainPage";

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
    ],
  },
]);

export default router;
