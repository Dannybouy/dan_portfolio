import { SEOMetadata } from "@/components/seo-metadata";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SkimlessLogo from "../../public/images/skimless-favicon.png";

export const metadata = SEOMetadata({
  title: "Projects",
  description:
    "Explore Spencer Sharp's innovative projects in software design and space technology, including Planetaria, Animaginary, and more.",
  keywords: [
    "software projects",
    "space technology projects",
    "Planetaria",
    "Animaginary",
  ],
});

interface Project {
  name: string;
  description: string;
  link: string;
  logo: StaticImageData | string;
  logoBackground: string;
  slug: string;
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
  },
  {
    name: "Animaginary",
    description:
      "High performance web animation library, hand-written in optimized WASM.",
    link: "github.com",
    logo: "",
    logoBackground: "bg-blue-500",
    slug: "animaginary",
  },
  {
    name: "HelioStream",
    description:
      "Real-time video streaming library, optimized for interstellar transmission.",
    link: "github.com",
    logo: "",
    logoBackground: "bg-red-500",
    slug: "heliostream",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col items-start">
      <div className="relative z-10 flex size-8 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
        <Image
          src={project.logo}
          alt={project.name}
          className="h-8 w-8"
          width={32}
          height={32}
          unoptimized
        />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
        <Link href={`/projects/${project.slug}`}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">{project.name}</span>
        </Link>
      </h2>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <Link href={`/projects/${project.slug}`} className="flex items-center">
          Read more
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="pt-24 pb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Things I've made trying to put my dent in the universe.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I've worked on tons of little projects over the years but these are
            the ones that I'm most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
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
