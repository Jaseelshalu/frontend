import React, { createContext, useReducer, useState } from 'react';

// Create context
export const levelDataContextProvider = createContext();



// Create context provider component
const levelDataContext = ({ children }) => {
  const [levelData, setLevelData] = useState([]);

  return (
    <levelDataContextProvider.Provider value={{ levelData, setLevelData }}>
      {children}
    </levelDataContextProvider.Provider>
  );
};

export default levelDataContext;
