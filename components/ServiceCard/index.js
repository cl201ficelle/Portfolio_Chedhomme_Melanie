import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
// Compétences
const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-zinc-800" : "hover:bg-zinc-100"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-60 text-xl text-justify" >
        {description
          ? description
          : ""}
      </p>
    </div>
  );
};

export default ServiceCard;
