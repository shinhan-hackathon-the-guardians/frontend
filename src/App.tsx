import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full max-w-[360px] mx-auto bg-BackGround">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
