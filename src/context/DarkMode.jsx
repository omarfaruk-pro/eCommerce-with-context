import { createContext, useContext, useState } from "react"

const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeActive = () => {
      setDarkMode(!darkMode);
      if (!darkMode) {
          document.documentElement.classList.add('dark'); 
      } else {
          document.documentElement.classList.remove('dark'); 
      }
  };

  return (
      <darkModeContext.Provider value={{ darkMode, darkModeActive }}>
          {children}
      </darkModeContext.Provider>
  );
}

export const useDarkMode = () => {
    return useContext(darkModeContext);
}