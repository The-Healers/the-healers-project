import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export const PageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};
