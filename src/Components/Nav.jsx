import { useContext } from "react";
import { ThemeContext } from "../Context/Themecontex";
import "./nav.css";

const Nav= () => {
   const { theme, toggleTheme } = useContext(ThemeContext);
   // console.log(theme);

   return (
      <div className="nav" style={theme}>
         <button onClick={() => toggleTheme()}>
            {theme.color === "black" ? "Dark Mode" : "Lighg Mode"}
         </button>
      </div>
   );
};

export default Nav;