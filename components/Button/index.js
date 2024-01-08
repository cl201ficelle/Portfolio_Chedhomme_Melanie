import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";
// composant bouton
const Button = ({ children, type, onClick, classes }) => {
  // thème actuel
  const { theme } = useTheme();
  return (
    <button
      onClick={onClick}
      type="button"
      className={`laptop:text-lg tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-zinc-600 text-white"
          : "hover:bg-zinc-200"
      } hover:scale-105 active:scale-100  tablet:first:ml-0  ${
        data.showCursor 
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
