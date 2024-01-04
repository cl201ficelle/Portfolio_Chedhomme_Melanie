import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const skillsRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSkillsScroll = () => {
    window.scrollTo({
      top: skillsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleSkillsScroll={handleSkillsScroll}
          handleAboutScroll={handleAboutScroll}

        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-5xl tablet:text-5xl laptop:text-5xl laptopl:text-5xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-4xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-4xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-4xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-10 laptop:mt-5" />
        </div>
        <div className="mt-16 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-5xl text-bold">Projets</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-10">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                skills={project.skills}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 laptop:mt-32 p-2 laptop:p-0" ref={skillsRef}>
          <h1 className="text-5xl text-bold">Compétences</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-10">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>      
        <div className="mt-16 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="text-5xl text-bold">A Propos</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-2xl w-full text-justify opacity-70">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
