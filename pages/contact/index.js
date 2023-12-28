import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import { useIsomorphicLayoutEffect } from "../../utils";
import Socials from "../../components/Socials";

const Blog = ({ posts }) => {
  const showBlog = useRef(data.showBlog);
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
    if (showBlog.current) stagger([text.current], { y: 30 }, { y: 0 });
    else router.push("/");
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    showBlog.current && (
      <>
        {data.showCursor && <Cursor />}
        <Head>
          <title>Me contacter</title>
        </Head>
        <div
          className={`container mx-auto mb-14 ${
            data.showCursor && "cursor-none"
          }`}
        >
          <div className="gradient-circle"></div>
          <Header isBlog={true}></Header>
          <div className="mt-10">
            <h1
              ref={text}
              className="mx-auto mob:p-2 text-bold text-6xl laptop:text-7xl w-full"
            >
              Me contacter
            </h1>
            <h2 className="mt-10 text-2xl ml-3">
             melanie.chedhomme96@gmail.com  
            </h2>
            <Socials className="mt-2 laptop:mt-5 ml-1" />
          </div>
        </div>
      </>
    )
  );
};


export default Blog;
