import { SEOMetadata } from "@/components/seo-metadata";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BankOfAnthos from "../../public/images/anthos/cymbal-logo.png";
import SkimlessLogo from "../../public/images/skimless-favicon.png";

export const metadata = SEOMetadata({
  title: "Projects",
  description:
    "Explore Daniel Okpara's innovative projects in software development and AI",
  keywords: [
    "software projects",
    "AI projects",
    "software development",
    "frontend development",
  ],
});

interface Project {
  name: string;
  description: string;
  link?: string;
  logo: StaticImageData | string;
  logoBackground: string;
  image?: string; // Added image property
  slug: string;
  technologies?: string[];
}

const projects: Project[] = [
  {
    name: "Skimless",
    description:
      "Now you can query your PDFs for specific questions based on the content of that PDF, digital books, and articles with ease using skimless",
    link: "https://skimless.vercel.app/",
    logo: SkimlessLogo,
    logoBackground: "bg-indigo-500",
    slug: "skimless",
    technologies: [
      "React",
      "NextJS",
      "React-PDF",
      "Typescript",
      "AI",
      "LangChain",
    ],
  },  
  {
    name: "Bank of Anthos",
    description:
      "A banking platform allowing users to create artificial bank accounts and complete transactions.",
    link: "https://github.com/Dannybouy/group-3-hackathon",
    logo: BankOfAnthos,
    logoBackground: "bg-indigo-500",
    slug: "bank-of-anthos",
    technologies: ["Java", "Python", "GCP", "Javascript", "PostgreSQL"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="grou relative flex flex-col items-start rounded">
      <div className="relative z-10 flex size-8 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
        <Image src={project.logo} alt={project.name} width={52} height={52} />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {project.name}
      </h2>
      <p className="relative z-10 mt-2 md:text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      {project.technologies && (
        <div className="relative z-10 mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-5">
        <Link
          href={project.link as Url}
          className="flex items-center text-teal-500 font-mono mt-4 underline underline-offset-2"
        >
          Live
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>

        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center text-teal-500 font-mono mt-4 underline underline-offset-2"
        >
          Read more
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="pt-24 pb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl max-w-2xl">
            Things I&apos;ve made trying to put my dent in the universe.
          </h1>
          <p className="mt-6  text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            I&apos;ve worked on tons of little projects over the years but these
            are the ones that I&apos;m most proud of. You can check out the code
            and live website. Click the Read more button to learn more about
            each project.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
