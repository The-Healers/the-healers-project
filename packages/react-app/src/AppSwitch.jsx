import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLayout } from "./layout/PageLayout";
import { Home } from "./pages/Home";

export const AppSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/example">
            <App subgraphUri={subgraphUri} />
          </Route> */}
        </Route>
      </Routes>
    </>
  );
};
