import {
  flowboardDashboard,
  flowboardDashboard2,
  flowboardLogin,
  flowboardTaskBoard,
  flowboardTaskForm,
  starluxHome,
  starluxHome2,
  starluxLogin,
  starluxProductDetail,
  starluxProducts,
  toursAdminCreateTour,
  toursAdminLocations,
  toursUsersHome,
  toursUsersReviews,
  toursUsersTourDetail,
} from "@/assets/images";
import messages from "@/messages/en.json";
import { StaticImageData } from "next/image";

type ProjectKey = keyof typeof messages.projects;

export const tagsData = [
  "all",
  "Frontend",
  "Backend",
  "Full Stack",
  "React",
  "Angular",
  "Node",
  "Express",
  "Elysia",
  "Python",
  "Django",
  "PostgreSQL",
] as const;

export interface Project {
  name: string;
  slug: string;
  type: string;
  url: string | Link[];
  description: ProjectKey;
  date: Date;
  github: Link[];
  technologies: string[];
  tags: (typeof tagsData)[number][];
  images: StaticImageData[];
}

interface Link {
  name: string;
  url: string;
}

export const projectsData: Project[] = [
  {
    name: "Flowboard",
    slug: "flowboard",
    type: "Full Stack",
    url: "https://flowboard.andrescode.com/",
    description: "flowboardDescription",
    date: new Date("2022-09-15"),
    github: [{ name: "GitHub", url: "https://github.com/andreidem18/flowboard" }],
    technologies: ["React", "Node", "Elysia", "PostgreSQL"],
    tags: [
      "React",
      "Node",
      "Elysia",
      "PostgreSQL",
      "Frontend",
      "Backend",
      "Full Stack",
    ],
    images: [
      flowboardLogin,
      flowboardDashboard,
      flowboardDashboard2,
      flowboardTaskBoard,
      flowboardTaskForm,
    ],
  },
  {
    name: "GoTour",
    slug: "go-tour",
    type: "Full Stack",
    url: [
      { name: "User view (recomended)", url: "https://gotour.andrescode.com" },
      { name: "Admin view", url: "https://gotour-admin.andrescode.com" },
    ],
    description: "toursAppDescription",
    date: new Date("2023-06-20"),
    github: [{ name: "GitHub", url: "https://github.com/andreidem18/go-tour" }],
    technologies: ["Angular", "Node", "Express", "PostgreSQL"],
    tags: [
      "Angular",
      "Node",
      "Express",
      "PostgreSQL",
      "Frontend",
      "Backend",
      "Full Stack",
    ],
    images: [
      toursUsersHome,
      toursUsersTourDetail,
      toursUsersReviews,
      toursAdminCreateTour,
      toursAdminLocations,
    ],
  },
  {
    name: "Starlux",
    slug: "starlux",
    type: "Full Stack",
    url: "https://starlux.andrescode.com/",
    description: "starluxDescription",
    date: new Date("2021-12-29"),
    github: [{ name: "GitHub", url: "https://github.com/andreidem18/starlux" }],
    technologies: ["React", "Python", "Django", "PostgreSQL"],
    tags: [
      "React",
      "Python",
      "Django",
      "PostgreSQL",
      "Frontend",
      "Backend",
      "Full Stack",
    ],
    images: [
      starluxHome,
      starluxHome2,
      starluxLogin,
      starluxProducts,
      starluxProductDetail,
    ],
  },
];
