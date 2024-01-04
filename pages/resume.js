import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {data.showCursor && <Cursor />}
      
      <div className="gradient-circle"></div>
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        
      
        <Header isBlog />
        {mount && (
          <div className="mt-12 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-neutral-800" : "bg-zinc-100"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-4xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-70">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-14">
                <h1 className="text-3xl font-bold">Formation en cours</h1>

                {resume.experiences.map(
                  ({ id, type, dates, position, formation }) => (
                    <ProjectResume
                      key={id}
                      type={type}
                      dates={dates}
                      position={position}
                      formation={formation}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-14">
                <h1 className="text-3xl font-bold">Formation initiale</h1>
                <div className="mt-2">
                  <h2 className="text-xl">{resume.education.universityName}</h2>
                  <h3 className="text-lg opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-lg mt-2 opacity-75">
                    {resume.education.universityPara}
                  </p>
                </div>
              </div>
              <div className="mt-14">
                <h1 className="text-3xl font-bold">Compétences</h1>
                <div className="flex mob:flex-col">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-xl">Langages</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-7 py-1">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-xl">Frameworks</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-7 py-1">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-xl">Autres</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-7 py-1">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
