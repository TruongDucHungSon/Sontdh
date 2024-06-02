import { data } from "@/constants/dataProjects";
import Link from "next/link";
import React from "react";
import ProjectSingle from "./ProjectSingle";

const Projects: React.FunctionComponent = () => {
  return (
    <section id="project" className="flex flex-col mt-16 lg:mt-32">
      <h2 className="mb-5 text-sm font-bold tracking-widest uppercase lg:hidden text-text-primary lg:sr-only">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-12">
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
      <div className="flex items-center mt-12 group">
        <h4 className="pb-px font-medium transition border-b border-transparent cursor-pointer text-text-primary group-hover:border-gr-5a motion-reduce:transition-none">
          <Link href="/archive">View Full Project Archive</Link>
        </h4>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 ml-1 transition-transform -translate-y-px text-text-primary shrink-0 group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Projects;
