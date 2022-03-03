import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageLayout } from "./layout/PageLayout";
import { Home } from "./pages/Home";
import { useMetaMask } from "./providers/MetaMaskProvider";

export const AppSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/protected-test"
            element={
              <RequireWallet>
                <div>my wallet is connected</div>
              </RequireWallet>
            }
          />
          {/* <Route path="/example">
            <App subgraphUri={subgraphUri} />
          </Route> */}
        </Route>
      </Routes>
    </>
  );
};

const RequireWallet = ({ children }) => {
  const { isWalletConnected } = useMetaMask();
  return isWalletConnected ? children : <Navigate to="/" />;
};
