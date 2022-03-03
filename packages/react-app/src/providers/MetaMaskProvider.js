import React, { useContext, useState } from "react";

const initialState = {
  walletAddress: "",
};

export const MetaMaskContext = React.createContext(initialState);

export const useMetaMask = () => useContext(MetaMaskContext);

export const MetaMaskProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");

  return <MetaMaskContext.Provider value={walletAddress}>{children}</MetaMaskContext.Provider>;
};
