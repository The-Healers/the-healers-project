import React from "react";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};
