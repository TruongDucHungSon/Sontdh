import { data } from "@/constants/dataProjects";
import React from "react";
import ProjectSingle from "./ProjectSingle";

const Projects: React.FunctionComponent = () => {
  return (
    <section id="project" className="flex flex-col mt-16 lg:mt-32">
      <h2 className="mb-5 text-sm font-bold tracking-widest uppercase lg:hidden text-white lg:sr-only">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-12 pb-20 lg:pb-0">
        {data.map((item) => (
          <ProjectSingle
            key={item.id}
            path={item.path}
            image={item.image}
            tech={item.tech}
            namePr={item.namePr}
            descriptions={item.descriptions}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
