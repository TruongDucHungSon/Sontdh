"use client";
import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>("about");
  const sections = ["about", "project"] as const; // Use 'as const' here

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const sectionsOffsets = sections.map((section: string) => {
          const element = document.getElementById(section);
          return { id: section, offset: element?.offsetTop ?? 0 };
        });

        const scrollPosition = window.scrollY + navRef.current.offsetHeight;

        for (let i = sectionsOffsets.length - 1; i >= 0; i--) {
          if (scrollPosition >= sectionsOffsets[i].offset) {
            setActiveSection(sectionsOffsets[i].id);
            break;
          }
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <nav ref={navRef} className="">
      <ul className="hidden flex-col lg:gap-5 lg:flex">
        {sections.map((section) => (
          <li key={section} className="flex items-center gap-3 group w-min">
            <p
              className={`h-[1.5px] w-[60px] transition-all duration-200 ease-in-out bg-[#677488] group-hover:bg-slate-100 group-hover:h-[1.6px] group-hover:w-[80px] ${
                activeSection === section
                  ? "bg-[#e2e8f0] h-[1.6px] w-[80px]"
                  : ""
              }`}
            ></p>
            <ScrollLink
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              className={`cursor-pointer text-[#677488] group-hover:font-bold group-hover:text-slate-100 capitalize transition-all ${
                activeSection === section ? "font-bold text-slate-100" : ""
              }`}
            >
              {section}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
