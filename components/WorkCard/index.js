import React from "react";
// projets avec image, nom, description, skill et lien vers github
const WorkCard = ({ img, name, description, skills, onClick }) => {
  return (
    <div
      className="shadow-xl shadow-zinc-600/60 overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link cursor-pointer"
      onClick={onClick}
    >
      <div
        className=" relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-8 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="mt-4 text-2xl opacity-80">
        {description ? description : "Description"}
      </h2>
      <h3 className=" mt-4 text-xl opacity-60">
        {skills ? skills : "Skills"}
      </h3>
    </div>
  );
};

export default WorkCard;
