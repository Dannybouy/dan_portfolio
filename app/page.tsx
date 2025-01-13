import { CollaborationSection } from "@/components/collaboration-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { SEOMetadata } from "@/components/seo-metadata";
import { Testimonials } from "@/components/testimonials";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import pic1 from "../public/images/1.webp";
import pic2 from "../public/images/2.webp";
import pic3 from "../public/images/3.webp";
import pic4 from "../public/images/4.webp";
import pic5 from "../public/images/5.webp";
import pic6 from "../public/images/6.webp";
import profilePicture from "../public/images/7.webp";
import nigeriaFlag from "../public/images/nigeria_flag.svg";

const technologies = [
  { status: "Nailing", name: "Javascript" },
  { status: "Killing", name: "Typescript" },
  { status: "Mastering", name: "React.js" },
  { status: "Using", name: "Next.js" },
  { status: "Loving", name: "Tailwind CSS" },
  { status: "Testing with", name: "Vitest" },
  { status: "Learning", name: "GO" },
];

export const metadata = SEOMetadata({
  title: "Home",
  description: "Daniel Okpara - Software Engineer.",
  keywords: ["software design", "frontend development", "software engineering"],
});

export default async function Home() {
  const picArray = [
    {
      id: 1,
      image: pic1,
    },
    {
      id: 2,
      image: pic2,
    },
    {
      id: 3,
      image: pic3,
    },
    {
      id: 4,
      image: pic4,
    },
    {
      id: 5,
      image: pic5,
    },
    {
      id: 6,
      image: pic6,
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/IamDannybouy20",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/iamdannybouy/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/daniel-okpara/",
    },
    {
      name: "Github",
      url: "https://github.com/Dannybouy",
    },
  ];

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Daniel Okpara",
          url: "https://www.spencersharp.com",
          jobTitle: "Software Engineer",
          worksFor: {
            "@type": "Organization",
            name: "Planetaria",
          },
          sameAs: [
            "https://x.com/IamDannybouy20",
            "https://www.linkedin.com/in/daniel-okpara/",
            "https://github.com/Dannybouy",
          ],
        })}
      </Script>
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full max-w-screen-2xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="flex flex-col items-start mb-16">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white mb-4">
                <Image
                  src={profilePicture}
                  alt="Profile picture"
                  width={200}
                  height={200}
                  quality={100}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-left font-unbounded">
                Software Engineer, developer, but loves frontend
              </h1>

              <div className="text-lg leading-8 text-muted-foreground max-w-[600px] text-left mb-8 font-mono">
                I&apos;m Daniel, a software engineer based in Lagos, Nigeria{" "}
                <span>
                  <Image
                    src={nigeriaFlag}
                    width={100}
                    height={100}
                    alt="nigerian flag"
                    className="size-10 inline-block"
                  />
                </span>{" "}
                . I&apos;m the founder and CEO of Planetaria, where we develop
                technologies that empower regular people to explore space on
                their own terms.
              </div>
              <div className="flex space-x-6">
                {socialLinks.map((platform) => (
                  <Link
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {platform.name === "Twitter" && (
                      <Twitter className="h-6 w-6 hover:text-teal-400" />
                    )}
                    {platform.name === "Instagram" && (
                      <Instagram className="h-6 w-6 hover:text-teal-400" />
                    )}
                    {platform.name === "LinkedIn" && (
                      <Linkedin className="h-6 w-6 hover:text-teal-400" />
                    )}
                    {platform.name === "Github" && (
                      <Github className="h-6 w-6 hover:text-teal-400" />
                    )}
                    <span className="sr-only">{platform.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen pl-8 pr-8 lg:pl-16 lg:pr-16">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8">
                {picArray.map((pic) => (
                  <div
                    key={pic.id}
                    className={`rounded-2xl overflow-hidden ${
                      pic.id % 2 === 0 ? "rotate-2" : "-rotate-2"
                    } hover:scale-105 transition-transform duration-300`}
                  >
                    <Image
                      src={pic.image}
                      alt={`picture ${pic.id}`}
                      width={1000}
                      height={600}
                      quality={100}
                      priority={pic.id <= 3}
                      className="object-cover w-full h-[300px] lg:h-[400px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="w-full max-w-screen-2xl px-6 lg:px-8 lg:mb-56">
          <div className="mx-auto max-w-2xl lg:max-w-5xl text-center">
            <div className="mb-12">
              <p className="text-base text-muted-foreground font-mono">
                Here is a little bit about
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-unbounded">
                languages and technologies,
              </h2>
              <p className="text-lg text-muted-foreground font-mono">
                that I am currently using and learning.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="space-y-2">
                  <p className="text-sm text-zinc-400 font-mono">
                    {tech.status}
                  </p>
                  <h3 className="text-2xl font-bold font-unbounded">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Collaboration Section */}
        <CollaborationSection />

        {/* CTA Section */}
      </div>
    </>
  );
}
