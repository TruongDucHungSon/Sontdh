import React from "react";

interface InforProps {}

const Infor: React.FC<InforProps> = () => {
  return (
    <section id="about" className="flex flex-col gap-5 pt-44 lg:p-4">
      <h2 className="text-sm font-bold tracking-widest uppercase  lg:hidden text-text-primary lg:sr-only">
        About
      </h2>
      <p className="text-base font-medium tracking-tight text-[#677488] ">
        My name is Son truong. I started learning how to code in January 2022
        and spent most of my day experimenting with HTML, CSS, TailwindCss and
        JavaScript, React. I enjoy coding and the challenge of learning
        something new everyday. My goal is to pursue a career in the field of
        front-end development.
      </p>
      <p className="text-base font-medium tracking-tight text-[#677488]">
        When I’m not at the computer, I’m usually rock climbing, hanging out
        with my wife and two cats, or running around Hyrule searching for
      </p>
    </section>
  );
};

export default Infor;
