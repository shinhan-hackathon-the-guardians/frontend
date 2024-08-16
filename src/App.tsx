import { useEffect } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts");

      console.log(res.data);
    };

    getPosts();
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-3xl font-bold">App</div>
    </QueryClientProvider>
  );
}

export default App;
