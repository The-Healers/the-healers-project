import React, { useContext, useState } from "react";

const initialState = {
  walletAddress: "",
  isWalletConnected: false,
};

export const MetaMaskContext = React.createContext(initialState);

export const useMetaMask = () => useContext(MetaMaskContext);

export const MetaMaskProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return <MetaMaskContext.Provider value={(walletAddress, isWalletConnected)}>{children}</MetaMaskContext.Provider>;
};
