import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import AddGroupMemberPage from "@/pages/AddGroupMemberPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "addGroupMember",
        element: <AddGroupMemberPage />,
      },
    ],
  },
]);

export default router;
