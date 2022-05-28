import { createContext, useState } from "react";
import { styles } from "../Styles.";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(styles.light);

   const toggleTheme = () => {
      setTheme(theme === styles.light ? styles.dark : styles.light);
   };

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};