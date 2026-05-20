import {
  React as ReactIcon,
  Angular,
  Django,
  Html5,
  JavaScript,
  Mongodb,
  NestJs,
  NextDotJs,
  NodeDotJs,
  Python,
  TypeScript,
  Postgresql,
  Express,
} from "../components/techsIcons";
import { Tech } from "../types/Tech";

type techKeys =
  | "angular"
  | "django"
  | "elysia"
  | "express"
  | "html"
  | "javascript"
  | "mongodb"
  | "nestjs"
  | "nextjs"
  | "nodejs"
  | "postgresql"
  | "python"
  | "react"
  | "typescript";

export const techs: Record<techKeys, Tech> = {
  angular: {
    name: "Angular",
    icon: Angular,
    color: "#c4473a",
  },
  django: {
    name: "Django",
    icon: Django,
    color: "#003e2b",
  },
  elysia: {
    name: "Elysia",
    icon: NodeDotJs,
    color: "#f449c7",
  },
  express: {
    name: "Express",
    icon: Express,
    color: "#333333",
  },
  html: {
    name: "HTML",
    icon: Html5,
    color: "#E44D26",
  },
  javascript: {
    name: "JavaScript",
    icon: JavaScript,
    color: "#F0DB4F",
  },
  mongodb: {
    name: "MongoDB",
    icon: Mongodb,
    color: "#439934",
  },
  nestjs: {
    name: "NestJS",
    icon: NestJs,
    color: "#E0234E",
  },
  nextjs: {
    name: "Next.js",
    icon: NextDotJs,
    color: "#000000",
  },
  nodejs: {
    name: "Node.js",
    icon: NodeDotJs,
    color: "#339933",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: Postgresql,
    color: "#336791",
  },
  python: {
    name: "Python",
    icon: Python,
    color: "#3776AB",
  },
  react: {
    name: "React",
    icon: ReactIcon,
    color: "#61DAFB",
  },
  typescript: {
    name: "TypeScript",
    icon: TypeScript,
    color: "#3178C6",
  },
};

export const techStackData = Object.values(techs);
