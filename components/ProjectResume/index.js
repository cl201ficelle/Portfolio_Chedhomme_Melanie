import React from "react";

// Curriculum vitae : partie formation en cours
const ProjectResume = ({ dates, position, formation }) => {
  return (
    <div className="mt-3 w-full">
      <div className="text-lg w-2/5">
        <h2 className="text-xl">{position}</h2>
        <h2 className="text-lg opacity-75">{dates}</h2>
      </div>
      <div className="w-3/5">
        {formation && (
          <ul className="list-none">
            <li className="text-lg my-1 opacity-80 ml-0">{formation}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
