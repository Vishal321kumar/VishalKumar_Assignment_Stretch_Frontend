import React, { createContext, useContext, useState } from 'react';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [userId, setUserId] = useState('');

  return (
    <GlobalContext.Provider value={{ userId, setUserId }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to consume the context
export const useGlobalState = () => useContext(GlobalContext);
