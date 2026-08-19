import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("bunker-theme");
    return saved === "true"; // Si es 'true', arranca en oscuro
  });
  useEffect(() => {
    localStorage.setItem("bunker-theme", isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  return useContext(ThemeContext);
}
