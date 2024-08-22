import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import axios from "axios";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/posts");
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
