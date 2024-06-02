import React from "react";
import Infor from "./Infor";
import Projects from "./Projects";
interface HeroProps {}

const Content: React.FC<HeroProps> = () => {
  return (
    <div className="py-0 lg:py-24 lg:pr-5 xl:pr-0">
      <Infor />
      <Projects />
    </div>
  );
};

export default Content;
