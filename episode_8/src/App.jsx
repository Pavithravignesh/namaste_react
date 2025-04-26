import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorElement from "./components/ErrorElement";
import AppHero from "./components/AppHero";
import "./index.css";

export function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppHero
        name={"test user class"}
        location={"test location class"}
        contact={"test contact class"}
      />
    ),
    errorElement: <ErrorElement />,
  },
]);
