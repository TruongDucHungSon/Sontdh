import pr1 from "../../public/pr1.png";
import pr2 from "../../public/pr2.png";

export const data = [
  {
    id: 1,
    mouth: 12,
    year: "Present",
    namePr: "E-Commerce Clothing Store",
    path: "https://datn-ebon.vercel.app/",
    descriptions:
      "This is an e-commerce website for selling clothes, compatible with various devices and easy to use.",
    image: pr1,
    tech: [
      {
        label: "NextJs",
      },
      {
        label: "Sass/Scss",
      },
      {
        label: "Redux Toolkit",
      },
      {
        label: "Tanstack Query",
      },
      {
        label: "Node",
      },
      {
        label: "Express",
      },
    ],
  },
  {
    id: 2,
    mouth: 12,
    year: "Present",
    path: "https://brainwave-tau-mauve.vercel.app/",
    namePr: "Brainwave Landing Page",
    image: pr2,

    descriptions:
      "This is a UX/UI landing page website for brain wave responsiveness, compatible with various devices.",
    tech: [
      {
        label: "ReactJs",
      },
      {
        label: "TailwindCss",
      },
    ],
  },
];
