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
import { Tech, techs } from "@/features/stack";
import messages from "@/messages/en.json";
import { StaticImageData } from "next/image";

type ProjectKey = keyof typeof messages.projects;

export interface Project {
  name: string;
  slug: string;
  type: string;
  url: string;
  description: ProjectKey;
  date: Date;
  github: string;
  technologies: Tech[];
  images: StaticImageData[];
}

export const projectsData: Project[] = [
  {
    name: "Flowboard",
    slug: "flowboard",
    type: "Full Stack",
    url: "https://flowboard.andrescode.com/",
    description: "flowboardDescription",
    date: new Date("2022-09-15"),
    github: "https://github.com/andreidem18/flowboard",
    technologies: [techs.react, techs.nodejs, techs.elysia, techs.postgresql],
    images: [
      flowboardTaskBoard,
      flowboardLogin,
      flowboardDashboard,
      flowboardDashboard2,
      flowboardTaskForm,
    ],
  },
  {
    name: "GoTour",
    slug: "go-tour",
    type: "Full Stack",
    url: "https://gotour.andrescode.com",
    // TODO: check how to add this url
    // { name: "Admin view", url: "https://gotour-admin.andrescode.com" },
    description: "toursAppDescription",
    date: new Date("2023-06-20"),
    github: "https://github.com/andreidem18/go-tour",
    technologies: [
      techs.angular,
      techs.nodejs,
      techs.express,
      techs.postgresql,
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
    github: "https://github.com/andreidem18/starlux",
    technologies: [techs.react, techs.python, techs.django, techs.postgresql],
    images: [
      starluxHome,
      starluxHome2,
      starluxLogin,
      starluxProducts,
      starluxProductDetail,
    ],
  },
];
