import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLayout } from "./layout/PageLayout";
import { Home } from "./pages/Home";

import App from "./App";

const subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract";

export const AppSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/example">
            <App subgraphUri={subgraphUri} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
