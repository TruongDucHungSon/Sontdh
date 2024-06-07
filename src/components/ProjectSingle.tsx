import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IProjectSignProps {
  id?: number;
  mouth?: number;
  year?: string;
  namePr?: string;
  descriptions: string;
  tech?: { label: string }[];
  path: string;
  image?: any;
}

const ProjectSingle: React.FC<IProjectSignProps> = ({
  id,
  mouth,
  year,
  namePr,
  descriptions,
  tech,
  path,
  image,
}) => {
  return (
    <div>
      <Link
        href={path}
        key={`experience-product-${id}`}
        className="flex flex-col-reverse md:flex-row justify-start items-start gap-3 lg:p-4 transition-all duration-200 rounded-md cursor-pointer group backdrop-filter lg:hover:bg-white/5 hover:backdrop-blur-sm lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
      >
        <div className="flex flex-col w-full md:w-40 mt-2 md:mt-0 lg:w-[34%]">
          {year && mouth ? (
            <span className="z-10 flex items-center mt-1 mb-2 text-xs font-semibold tracking-wide uppercase xl:text-sm text-text-secound ">
              {mouth} - {year}
            </span>
          ) : (
            ""
          )}
          {image && (
            <Image
              src={image}
              alt="Picture of the author"
              width={300}
              height={300}
              className="object-cover w-[200px] lg:w-full  h-32 transition border-2 rounded  border-gray-800 group-hover:border-gray-500 sm:order-1 sm:col-span-2 sm:translate-y-1"
            />
          )}
        </div>
        <div className=" w-full lg:w-[70%]">
          <div className="">
            <h3 className="inline-flex items-baseline text-base font-medium leading-tight text-text-primary lg:group-hover:text-[#59ddca] lg:focus-visible:text-gr-5a ">
              {namePr}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1 lg:group-focus-visible:-translate-y-1 lg:group-focus-visible:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </h3>
            <p className="mt-3 text-sm text-[#677488] font-medium xl:text-sm tracking-wide ">
              {descriptions}
            </p>
          </div>
          {tech && (
            <ul className="flex flex-wrap items-center gap-2 mt-5">
              {tech?.map((item, index) => (
                <li
                  className="flex items-center px-3 py-1 text-xs font-medium leading-5 capitalize rounded-full text-[#59ddca] bg-[#122b39]"
                  key={index}
                >
                  <div>{item.label}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProjectSingle;
