import { MDXContent } from "@/components/mdx-content";
import { ProjectArchitecture } from "@/components/project-architecture";
import { ProjectGallery } from "@/components/project-gallery";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProjectBySlug } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/projects"
              className="group my-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <ArrowLeft className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </Link>

            <header className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
                  <Image
                    src={project.logo || "/placeholder.svg?height=48&width=48"}
                    alt=""
                    className="h-8 w-8"
                    width={32}
                    height={32}
                    unoptimized
                  />
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {project.name}
                </h1>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies &&
                  project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
              </div>

              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex gap-4">
                {project.links &&
                  project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                    >
                      {link.icon && <link.icon className="h-5 w-5" />}
                      {link.label}
                    </Link>
                  ))}
              </div>
            </header>

            <Tabs defaultValue="overview" className="mt-12">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="technical">Technical Details</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-8">
                <div className="relative aspect-[16/10] rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={
                      project.image || "/placeholder.svg?height=400&width=800"
                    }
                    alt=""
                    className="rounded-2xl object-cover"
                    fill
                    priority
                  />
                </div>
                <div className="prose dark:prose-invert">
                  <MDXContent content={project.content || ""} />
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                {project.gallery && project.gallery.length > 0 ? (
                  <ProjectGallery images={project.gallery} />
                ) : (
                  <p>No gallery images available for this project.</p>
                )}
              </TabsContent>

              <TabsContent value="architecture" className="mt-6">
                {project.architecture ? (
                  <ProjectArchitecture architecture={project.architecture} />
                ) : (
                  <p>No architecture details available for this project.</p>
                )}
              </TabsContent>

              <TabsContent
                value="technical"
                className="mt-6 prose dark:prose-invert"
              >
                <h2>Technology Stack</h2>
                {project.techStack && project.techStack.length > 0 ? (
                  <ul>
                    {project.techStack.map((tech) => (
                      <li key={tech.name}>
                        <strong>{tech.name}</strong>: {tech.description}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No technology stack details available for this project.</p>
                )}

                <h2>Key Features</h2>
                {project.features && project.features.length > 0 ? (
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature.title}>
                        <strong>{feature.title}</strong>: {feature.description}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No key features listed for this project.</p>
                )}

                <h2>Challenges & Solutions</h2>
                {project.challenges && project.challenges.length > 0 ? (
                  project.challenges.map((challenge) => (
                    <div key={challenge.title} className="mb-6">
                      <h3>{challenge.title}</h3>
                      <p>{challenge.description}</p>
                      <p>
                        <strong>Solution:</strong> {challenge.solution}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No challenges and solutions listed for this project.</p>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </article>
  );
}
