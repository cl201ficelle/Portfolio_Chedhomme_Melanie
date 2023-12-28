import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));

  return (
    <div className="mt-5 w-full ">
      <div className="text-lg w-2/5">
        <h2 className="text-lg font-bold">{position}</h2>
        <h2 className="text-sm opacity-75">{dates}</h2>
      </div>
      <div className="w-3/5">
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-none">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-50 ml-0 ">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
