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
  Aws,
  ClaudeAI,
  Git,
  GithubCopilot,
  Kubernetes,
  GithubActions,
} from "../components/techsIcons";
import { Docker } from "../components/techsIcons/Docker";
import { Tech, TechCategory } from "../types/Tech";

type techKeys =
  | "angular"
  | "aws"
  | "claude"
  | "copilot"
  | "django"
  | "elysia"
  | "express"
  | "git"
  | "html"
  | "docker"
  | "javascript"
  | "kubernetes"
  | "cicd"
  | "mongodb"
  | "nestjs"
  | "nextjs"
  | "nodejs"
  | "opencode"
  | "postgresql"
  | "sql"
  | "python"
  | "react"
  | "typescript";

export const techs: Record<techKeys, Tech> = {
  angular: {
    name: "Angular",
    icon: Angular,
    color: "#c4473a",
  },
  aws: {
    name: "AWS",
    icon: Aws,
    color: "#FF9900",
  },
  claude: {
    name: "Claude",
    icon: ClaudeAI,
    color: "#D97706",
  },
  copilot: {
    name: "Copilot",
    icon: GithubCopilot,
    color: "#000000",
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
  docker: {
    name: "Docker",
    icon: Docker,
    color: "#019BC6",
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
  sql: {
    name: "SQL",
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
  git: {
    name: "Git",
    icon: Git,
    color: "#F05032",
  },
  kubernetes: {
    name: "Kubernetes",
    icon: Kubernetes,
    color: "#326CE5",
  },
  cicd: {
    name: "CI/CD",
    icon: GithubActions,
    color: "#2088FF",
  },
  opencode: {
    name: "OpenCode",
    icon: ClaudeAI,
    color: "#6366F1",
  },
};

export const frontendTechs = [
  techs.react,
  techs.nextjs,
  techs.typescript,
  techs.javascript,
  techs.html,
  techs.angular,
];

export const backendTechs = [
  techs.nodejs,
  techs.express,
  techs.nestjs,
  techs.elysia,
  techs.python,
  techs.django,
];

export const databaseTechs = [techs.sql, techs.mongodb];

export const devOpsTechs = [techs.git, techs.docker, techs.aws, techs.kubernetes, techs.cicd];

export const iaTechs = [techs.claude, techs.opencode, techs.copilot];

export const techsByCategory: TechCategory[] = [
  {
    name: "Frontend",
    techs: frontendTechs,
  },
  {
    name: "Backend",
    techs: backendTechs,
  },
  {
    name: "Database",
    techs: databaseTechs,
  },
  {
    name: "DevOps",
    techs: devOpsTechs,
  },
  {
    name: "AI",
    techs: iaTechs,
  },
]

export const techStackData = Object.values(techs);
