import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./css/style.css";
import { BrowserRouter } from "react-router-dom";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {ReactQueryDevtools} from "react-query/devtools"


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>

    </QueryClientProvider>
  </React.StrictMode>
);
