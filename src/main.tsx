import { StrictMode } from "react";
import { render } from "react-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import App from "./App";
import "./index.css";

// Create a client
const queryClient = new QueryClient();

const Root = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools position="bottom-left" />
      </QueryClientProvider>
    </StrictMode>
  );
};

render(<Root />, document.getElementById("root"));
