import fs from "fs/promises";
import matter from "gray-matter";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Github, Globe, TypeIcon as type, type LucideIcon } from "lucide-react";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
  slug: string;
  name: string;
  description: string;
  logo: string;
  video: string;
  content: string;
  technologies: string[];
  links: Array<{
    href: string;
    label: string;
    icon: LucideIcon;
  }>;
  gallery: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  architecture: {
    overview: string;
    diagram: string;
    components: Array<{
      name: string;
      description: string;
    }>;
    dataFlow: Array<{
      from: string;
      to: string;
      description: string;
    }>;
  };
  techStack: Array<{
    name: string;
    description: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  challenges: Array<{
    title: string;
    description: string;
    solution: string;
  }>;
}

export async function getAllProjects(): Promise<Project[]> {
  const files = await fs.readdir(projectsDirectory);
  const projects = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace(/\.mdx$/, ""),
        ...data,
        content,
      } as Project;
    })
  );

  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      name: data.name,
      description: data.description,
      logo: data.logo,
      video: data.video,
      technologies: data.technologies,
      links: data.links,
      gallery: data.gallery,
      architecture: data.architecture,
      techStack: data.techStack,
      features: data.features,
      challenges: data.challenges,
      content,
    } as Project;
  } catch {
    return null;
  }
}
