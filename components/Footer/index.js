import React from "react";
import Socials from "../Socials";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-5xl text-bold">Contact</h1>
          <div className="mt-10">
          <Button
                    onClick={() => window.open("mailto:melanie.chedhomme96@gmail.com")}
                  >
                  melanie.chedhomme96@gmail.com  
                  </Button>
            <div className="mt-5">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
