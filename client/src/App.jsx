import React from "react";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom"; // make sure this is here

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
