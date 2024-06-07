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
      <ul className="flex flex-col ">
        {sections.map((section) => (
          <li key={section}>
            <ScrollLink
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              className={`cursor-pointer capitalize ${
                activeSection === section ? "font-bold" : ""
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
