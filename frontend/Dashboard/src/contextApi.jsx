// AppContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a Context
const AppContext = createContext();

// Create a Provider component
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    theme: 'light',
  });

  // You can add more state and functions here as needed
  const setUser = (user) => setState((prevState) => ({ ...prevState, user }));
  const setTheme = (theme) => setState((prevState) => ({ ...prevState, theme }));

  return (
    <AppContext.Provider value={{ state, setUser, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook for using context
export const useAppContext = () => useContext(AppContext);
