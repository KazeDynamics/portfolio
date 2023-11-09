import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  kyndryl,
  pgd,
  computer,
  McKinsey,
  svelte,
  gitlab,
  sketch,
  jira,
  aem,
  ra,
  vray,
  ven,
  dcm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Svelte & React Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: backend,
  },
  {
    title: "Scrum Master",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Svelte",
    icon: svelte,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "GitLab",
    icon: gitlab,
  },
  {
    name: "Sketch",
    icon: sketch,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "AEM",
    icon: aem,
  },
  {
    name: "Jira",
    icon: jira,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "various",
    icon: computer,
    iconBg: "#fff",
    date: "Nov 2020 - Aug 2021",
    points: [
      "Built and launched front end applications for clients using multiple frameworks, programming languages and platforms. Giving them the ability to start their online presence and embrace a new niche with new potential customers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Kyndryl",
    icon: kyndryl,
    iconBg: "#fff",
    date: "Sep 2021 - Ene 2022",
    points: [
      "Research, design, implement and manage software programs mainly in Python. Involved in systems testing and validation procedures, as well as analysis and testing of programs and products prior to formal launch. Proactively participating in the activities of programming, monitoring and evaluating the performance of the systems.",
    ],
  },
  {
    title: "Front-End Engineer",
    company_name: "Publicis Groupe",
    icon: pgd,
    iconBg: "#fff",
    date: "Feb 2022 - Present",
    points: [
      "Creation of user-friendly web pages. Maintenance and improvement of different ever changing websites. Optimization of applications for maximum compliance. Design mobile-based features. Collaboration with back-end developers and web designers to improve usability. Writing of functional documents and guides. Creation of quality mockups and prototypes. Ensure high-quality graphic standards and brand consistency. Determine the structure and design of web pages and striking a balance between functional and aesthetic designs. The 'familiar customers' satisfaction increased 25% in the last year.",
    ],
  },
];

const projects = [
  {
    name: "Pharmaceutical product",
    description:
      "Web-based platform that allows users to search everything related to the user specific illness, providing a convenient and efficient solution for medical needs.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "AEM",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: vray,
    live_site_link: "https://www.vraylar.com/",
  },
  {
    name: "Coffee supplier",
    description:
      "Web application that enables users to search for coffee products, view technical services the company provides, and locate available shops based on their current location.",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "NODEJS",
        color: "pink-text-gradient",
      },
    ],
    image: dcm,
    live_site_link: "https://dcm.cr/",
  },
  {
    name: "Pharmaceutical product",
    description:
      "Web-based platform that allows users to search everything related to the user specific illness, providing a convenient and efficient solution for medical needs.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "AEM",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: ven,
    live_site_link: "https://www.venclexta.com/",
  },
  {
    name: "Biotechnology company",
    description:
      "A comprehensive management platform that allows users to take advantage of a more organized and curated way of handling regulatory supply chains for international products entering countries and regions.",
    tags: [
      {
        name: "TAILWINDCSS",
        color: "blue-text-gradient",
      },
      {
        name: "POCKETBASE",
        color: "green-text-gradient",
      },
      {
        name: "SVELTEKIT",
        color: "pink-text-gradient",
      },
    ],
    image: ra,
    live_site_link: "https://bscranotebook.com/",
  },
];

export { services, technologies, experiences, projects };
