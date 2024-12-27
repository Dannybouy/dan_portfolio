import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { type LucideIcon, Github, Globe, ExternalLink } from 'lucide-react'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export interface Project {
  slug: string
  name: string
  description: string
  logo: string
  image: string
  content: string
  technologies: string[]
  links: Array<{
    href: string
    label: string
    icon: LucideIcon
  }>
  gallery: Array<{
    src: string
    alt: string
    caption?: string
  }>
  architecture: {
    overview: string
    diagram: string
    components: Array<{
      name: string
      description: string
    }>
    dataFlow: Array<{
      from: string
      to: string
      description: string
    }>
  }
  techStack: Array<{
    name: string
    description: string
  }>
  features: Array<{
    title: string
    description: string
  }>
  challenges: Array<{
    title: string
    description: string
    solution: string
  }>
}

export async function getAllProjects(): Promise<Project[]> {
  const files = await fs.readdir(projectsDirectory)
  const projects = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(projectsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: filename.replace(/\.mdx$/, ''),
        ...data,
        content,
      }
    })
  )

  return projects
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      ...data,
      content,
    }
  } catch {
    return null
  }
}

